import Image from "next/image";
import LinksBar from "./components/LinksBar";
import Bantique from "./components/Bantique";
import PersonaIcon from "./components/PersonaIcon";
import ChartIcon from "./components/ChartIcon";
import MineIcon from "./components/MineIcon";
import UnoIcon from "./components/UnoIcon";

export default function Home() {
  return (
    <div className="content gap-x-8 min-w-md max-w-7xl py-2">
      <div style={{ gridArea: "a" }}>
        <header className="flex flex-col items-center px-2">
          <h1 className="hl text-xl ">Anna Raskovalova</h1>
          <div className="grid grid-cols-[1fr_2fr] items-center">
            <Image
              className="rounded-full row-span-2 justify-self-center m-2"
              src="/me/me.webp"
              alt="Anna Raskovalova"
              width={100}
              height={100}
              priority
            />
            <h2 className="hl text-xl relative right-10 text-nowrap">Frontend Dev</h2>
            <h3 className="w-fit ml-10 text-md text-center relative right-10 bottom-5">2 years React</h3>
            <LinksBar />
          </div>
        </header>
        <Bantique className="md:col-start-1" type="1" />
        {/* Core Stack */}
        <section className="md:col-start-1 md:row-start-1 flex flex-col px-2">
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
      </div>
      {/* Work Exp */}
      <section className="flex flex-col gap-2" style={{ gridArea: "b" }}>
        <h2 className="hl text-xl mr-auto ml-2">Work Exp 4 years</h2>
        <p className="ml-2">1y Engineer in ITSM</p>
        <p className="ml-2">1y FullStack (Java/Scala)</p>
        <h2 className="hl text-xl self-center">2 years Frontend Dev</h2>
        <article className="article flex flex-col gap-2">
          <div className="flex items-end flex-wrap">
            <h4 className="text-md mr-2">A few Projects</h4><p>Worked as an outsourced frontend developer for multiple clients at</p>
            <h3 className="hl italic text-md self-end relative ml-auto"><a target="_blank" href="https://www.digitalleague.ru/">Digital League</a></h3>
          </div>
          <p>TypeScript, React, Angular, Ant Design, Material Design, Redux, SCSS, Formik, React-Hook-Form</p>
          <ul className="ul">
            <li><span>Developed several web applications for external clients, primarily using <b>React</b>. Rebuilt a legacy <b>Angular</b> calendar widget that integrates in Naumen SD</span></li>
            <li><span>Collaborated in cross-functional teams (frontend/backend developers, designers, project managers) across various client projects, following <b>Agile</b> workflows</span></li>
            <li><span>Solo development. Transformed <b>Figma</b> designs into functional prototypes for client <b>presentations</b> at major financial company</span></li>
            <li><span>Created a <b>TypeScript</b> utility type to narrow object fields by their type for <b>react-hook-form</b> component</span></li>
            <li><span>Developed a mini-app that controls outer ITSM application to reconfigure default behavior, to enhance visual aspects</span></li>
          </ul>
        </article>
        <article className="article flex flex-col gap-2">
          <div className="flex flex-wrap">
            <h4 className="text-md">Corporate Network Device Detection & Auditing App</h4>
            <h3 className="hl italic text-md ml-auto"><a target="_blank" href="https://www.alloysoftware.com/">Alloy Software</a></h3>
          </div>
          <p>TypeScript, React, Material Design, Zustand, React-Hook-Form, Cypress</p>
          <ul className="ul">
            <li><span>As my first task in the company, I had to migrate project from <b>Formik</b> to <b>react-hook-form</b> and then migrate from <b>styled-components</b> to <b>MUI sx</b> approach</span></li>
            <li><span>Optimized large datasets using <b>tanstack/react-virtual</b> and with server-side pagination, reducing DOM load and request time</span></li>
            <li><span><b>E2E tests. Cypress</b> was added and I wrote most E2E test case scenarios for every section of the project</span></li>
            <li><span>Actively worked with GitLab <b>CI/CD</b> pipelines (debugging failed tests)</span></li>
            <li><span>Enforced clean <b>Git</b> history via <b>rebase/squash</b> practices</span></li>
          </ul>
        </article>
      </section>
      {/* Pet Projects */}
      <div style={{ gridArea: "c" }}>
        <Bantique type="2" />
        <section className="flex flex-col px-2">
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
      </div>
      {/* Footer */}
      <footer className="row-start-3 flex flex-col items-center mt-20" style={{ gridArea: "f" }}>
        <p className="mb-2">Contact Me</p>
        <LinksBar />
      </footer>
    </div>
  );
}
