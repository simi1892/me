import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Business from "../components/Business.tsx";
import Button from "../components/Button.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";
import Hobbies from "../components/Hobbies.tsx";
import { PDFFileIcon } from "../components/Icons.tsx";
import Strengths from "../components/Strengths.tsx";
import Studies from "../components/Studies.tsx";
import Hero from "../components/Hero.tsx";
import LanguageToggle from "../islands/LanguageToggle.tsx";
import { T } from "../state.ts";
import { State } from "./_middleware.tsx";
import Skills from "../components/Skills.tsx";

function getResume() {
  return (
    <Button>
      <a class="flex gap-1" href="/cv.pdf" target="_blank">
        {PDFFileIcon}
        CV
      </a>
    </Button>
  );
}

export default function Home(props: PageProps<null, State>) {
  T.value = props.state.t;

  return (
    <>
      <Head>
        <title>Portfolio Simon Egli</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div class="container mx-auto px-4">
        <header class="py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold">Portfolio</h1>
          <div class="flex items-center space-x-4">
            {getResume()}
            <LanguageToggle lang={props.state.lang} />
          </div>
        </header>
        <main>
          <Hero />
          <Business />
          <Skills />
          <Studies />
          <Strengths />
          <Hobbies />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
