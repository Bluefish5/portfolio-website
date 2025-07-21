import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import data from "@/app/data/projects.json";
import Gallery from "@/app/components/Gallery";

type CardType = {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  galleryFolder: string;
};

type PageProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  const cards: CardType[] = data;
  return cards.map(project => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = params;
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

      <div className="mb-12 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[300px] md:mr-6 mb-4 rounded overflow-hidden flex-shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={300}
              className="object-cover rounded w-full h-auto"
            />
          </div>
          <div className="text-black text-justify">
            <p className="whitespace-pre-line">{project.details}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <Gallery images={images} folder={project.galleryFolder} />
    </main>
  );
}
