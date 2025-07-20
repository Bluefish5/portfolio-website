import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import data from '@/app/data/projects.json';

type CardType = {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  galleryFolder: string;
};


type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const cards: CardType[] = data;
  return data.map(project => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const cards: CardType[] = data;

  const project = data.find(p => p.id.toString() === id);
  if (!project) return notFound();

  const galleryPath = path.join(process.cwd(), "public/images", project.galleryFolder);

  let images: string[] = [];
  try {
    const files = await fs.readdir(galleryPath);
    images = files.filter(file => /\.(png|jpe?g|webp)$/i.test(file));
  } catch (error) {
    console.warn(`Brak folderu galerii: ${galleryPath}`);
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Link href="/" className="text-blue-600 text-sm mb-8 inline-block">← Back to projects</Link>

      <h1 className="text-3xl font-bold mb-6 text-black">{project.title}</h1>

      <div className="mb-12 clearfix">
        <div className="relative w-[300px] h-[300px] float-left mr-6 mb-4 rounded overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
        <div className="text-black text-justify">
          <p className="whitespace-pre-line">{project.details}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative w-full h-48 rounded overflow-hidden">
              <Image
                src={`/images/${project.galleryFolder}/${img}`}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
