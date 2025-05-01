import Image from "next/image";
import LinksBar from "./components/LinksBar";
import Bantique from "./components/Bantique";
import PersonaIcon from "./components/PersonaIcon";
import ChartIcon from "./components/ChartIcon";
import MineIcon from "./components/MineIcon";
import UnoIcon from "./components/UnoIcon";

export default function Home() {
  return (
    <div className="flex flex-col m-4 min-w-md max-w-7xl">
      <header className="flex flex-col items-center">
        <h1 className="hl text-xl">Anna Raskovalova</h1>
        <div className="grid grid-cols-[auto_1fr] gap-x-4 items-center">
          <Image
            className="rounded-full row-span-2 justify-self-center m-2"
            src="/me/me.webp"
            alt="Anna Raskovalova"
            width={100}
            height={100}
            priority
          />
          <h2 className="hl text-xl relative right-10">Frontend Dev</h2>
          <h3 className="text-md text-center relative right-10 bottom-5">2 years React</h3>
          <LinksBar />
        </div>
      </header>
      <main className="grow">
        <Bantique type="1" />
        <section className="flex flex-col">
          <h2 className="hl text-xl relative bottom-3 mr-auto">Core Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-xl self-center">
            <pre className="hl text-xl">React</pre>
            <pre className="hl text-md relative top-8 right-4">Next.js</pre>
            <pre className="hl text-xl relative left-4 top-4 ">TypeScript</pre>
            <div className="w-full"></div>
            <pre className="hl text-md">Tailwind CSS</pre>
            <pre className="hl text-xl relative top-4">Material UI</pre>
            <pre className="hl text-md relative top-8">Figma</pre>
            <div className="w-full"></div>
            <pre className="hl text-md">Zustand</pre>
            <pre className="hl text-md relative top-4">Tanstack/Query</pre>
            <pre className="hl text-md">Axios</pre>
            <div className="w-full"></div>
            <pre className="hl text-xl">Cypress</pre>
            <pre className="hl text-md">react-hook-form</pre>
            <div className="w-full"></div>
            <pre className="hl text-md relative bottom-4 right-4">git</pre>
            <pre className="hl text-md">npm</pre>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="hl text-xl mr-auto">Work Exp 4 years</h2>
          <p className="text-md">1y Engineer in ITSM</p>
          <p className="text-md">1y FullStack (Java/Scala)</p>
          <h2 className="hl text-xl self-center">2 years Frontend Dev</h2>
          <article className="article flex flex-col gap-2">
            <div className="flex items-end flex-wrap">
              <h4 className="text-md mr-2">A few Projects</h4><p>Worked as an outsourced frontend developer for multiple clients at</p>
              <h3 className="hl italic text-md self-end relative ml-auto"><a target="_blank" href="https://www.digitalleague.ru/">Digital League</a></h3>
            </div>
            <p>TypeScript, React, Angular, Ant Design, Material Design, Redux, SCSS, Formik, React-Hook-Form</p>
            <ul className="ul">
              <li>Participated in developing several web applications for external clients, primarily using <b>React</b>, with occasional work in <b>Angular</b> (e.g., rebuilt a legacy calendar widget that integrates in Naumen SD)</li>
              <li>Worked in cross-functional teams (backend devs, designers, managers) across different client projects, following <b>Agile</b> workflows</li>
              <li>Solo development. Transformed <b>Figma</b> designs into functional prototypes for client review and stakeholder <b>presentations</b></li>
              <li>Developed utility type in <b>TypeScript</b> that narrow object's fields by its type for specific <b>react-hook-form</b> field</li>
              <li><b>Injected</b> mini app that controls outer ITSM application to reconfigure default behavior, to enhance visual aspects</li>
            </ul>
          </article>
          <article className="article flex flex-col gap-2">
            <div className="flex flex-wrap">
              <h4 className="text-md">Corporate Network Device Detection & Auditing App</h4>
              <h3 className="hl italic text-md ml-auto"><a target="_blank" href="https://www.alloysoftware.com/">Alloy Software</a></h3>
            </div>
            <p>TypeScript, React, Material Design, Zustand, React-Hook-Form, Cypress</p>
            <ul className="ul">
              <li>As my I first task in the company, I had to migrate project from <b>Formik</b> to <b>react-hook-form</b> and then migrate from <b>styled-components</b> to <b>MUI sx</b> approach</li>
              <li>Optimized large datasets using <b>tanstack/react-virtual</b> and with server-side pagination, reducing DOM load and request time</li>
              <li><b>E2E tests. Cypress</b> was added and I wrote most E2E test case scenarios for every section of the project</li>
              <li>Actively worked with GitLab <b>CI/CD</b> pipelines (debugging failed tests)</li>
              <li>Enforced clean <b>Git</b> history via <b>rebase/squash</b> practices</li>
            </ul>
          </article>
        </section>
        <Bantique type="2" />
        <section className="flex flex-col">
          <h2 className="hl text-xl self-end relative bottom-3">Pet Projects</h2>
          <ul>
            <li>
              <PersonaIcon className="inline mr-2 relative bottom-1" color="var(--accent-01)" />
              <h3 className="inline w-fit text-md">Resume. Next.js, Tailwind CSS</h3>
              <br />
              <a className="w-fit ml-20" href="https://www.figma.com/design/THmeKYRVqg2aOr9TQvyhVG/Portfolio?node-id=0-1&p=f&t=p9IwDQ2G27DDJ9do-0" target="_blank">figma</a>
              <a className="w-fit ml-4" href="https://github.com/gepardoj/me" target="_blank">code</a>
              <br />
              <a className="w-fit ml-20">this site =)</a>
            </li>
            <li>
              <MineIcon className="inline mr-2 relative bottom-1" color="var(--accent-02)" />
              <h3 className="inline w-fit text-md">Minesweeper in Telegram WebApps. TypeScript, WebGL. Ported to C++ & DirectX 11</h3>
              <br />
              <a className="w-fit ml-20" href="https://github.com/gepardoj/minesweeper-v3-frontend" target="_blank">web</a>
              <a className="w-fit ml-4" href="https://github.com/gepardoj/D3D11Minesweeper" target="_blank">c++</a>
              <br />
              <a href="https://t.me/ra_minesweeper_bot" target="_blank" className="w-fit ml-20">@ra_minesweeper_bot</a>
            </li>
            <li>
              <UnoIcon className="inline mr-2 relative bottom-1" color="var(--accent-01)" />
              <h3 className="inline w-fit text-md">Uno Game. Unity, C#, NodeJS, Websockets</h3>
              <br />
              <a className="w-fit ml-20" href="https://github.com/gepardoj/Uno-unity" target="_blank">unity</a>
              <a className="w-fit ml-4" href="https://github.com/gepardoj/uno-server" target="_blank">node.js</a>
            </li>
            <li>
              <ChartIcon className="inline mr-2 relative bottom-1" color="var(--accent-02)" />
              <h3 className="inline w-fit text-md">Real Time Stock Trading Game. Websockets, Next.js, Tailwind CSS</h3>
              <br />
              <a className="w-fit ml-20">upcoming...</a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="row-start-3 flex flex-col items-center mt-20">
        <p>Contact Me</p>
        <LinksBar />
      </footer>
    </div>
  );
}
