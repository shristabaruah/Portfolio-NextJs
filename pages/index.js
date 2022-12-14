import Head from "next/head";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Main from "../Components/Main";
import Projects from "../Components/Project/Projects";
import Skills from "../Components/Skill/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shrista Baruah || Front-End developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
