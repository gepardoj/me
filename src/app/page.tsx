import Image from "next/image";
import LinksBar from "./components/LinksBar";

export default function Home() {
  return (
    <div className="flex flex-col my-4 min-w-md max-w-7xl">
      <header className="flex flex-col items-center">
        <h1 className="hl font-bold text-xl">Anna Raskovalova</h1>
        <div className="grid grid-cols-[auto_1fr] gap-x-4 items-center">
          <Image
            src="/me/me.webp"
            alt="Anna Raskovalova"
            width={100}
            height={100}
            className="rounded-full row-span-2"
            priority
          />
          <h2 className="hl text-xl">Frontend Dev</h2>
          <h3>2 years React</h3>
        </div>
        <LinksBar />
      </header>
      <main className="grow">
      </main>
      <footer className="row-start-3 flex flex-col items-center mt-auto">
        <p>Contact Me</p>
        <LinksBar />
      </footer>
    </div>
  );
}
