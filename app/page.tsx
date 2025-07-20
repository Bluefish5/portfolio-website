import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import data from '@/app/data/projects.json';

type CardType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function Home() {
  const cards: CardType[] = data;
   return (
    <main>
      <h1 className="text-4xl font-bold mt-24">
        Cześć, jestem <span className="text-[#4753A2]">Rafał Grabowski</span>
      </h1>
      <h1 className="text-4xl font-bold">inżynier oprogramowania i sprzętu</h1>

      <span className="text-[#676363]">
        Jestem inżynierem oprogramowania z wykształcenia i zawodu, a moim hobby jest tworzenie sprzętu.
      </span>

      <div className="mt-24 flex gap-4">
        <Link href="/rg_cv.pdf">
          <button className="bg-[#4753A2] text-white rounded-[20px] w-[180px] h-[55px] opacity-80 transition hover:opacity-100 hover:shadow-md cursor-pointer">
            Pobierz CV
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-[#DDDDDD] text-[#4753A2] rounded-[20px] w-[180px] h-[55px] opacity-80 border border-[#4753A2] transition hover:opacity-100 hover:shadow-md cursor-pointer">
            Skontaktuj się
          </button>
        </Link>
      </div>

      <h1 className="mt-24 text-3xl font-bold">Projekty</h1>

      <div className="flex flex-col gap-6 mt-8">
        {cards.map(({ id, title, description, image }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </div>
    </main>
  );
}
