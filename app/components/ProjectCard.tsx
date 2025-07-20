// app/components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";


type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function ProjectCard({ id, title, description, image }: Card) {
  return (
    <Link href={`/project/${id}`}>
      <div className="flex gap-6 items-start max-w-3xl p-4 shadow min-h-[180px] hover:shadow-lg transition">
        <div className="relative w-[200px] h-[150px] shrink-0 rounded overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold uppercase mb-2">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
}
