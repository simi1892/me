import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import TitleScreen from "../components/TitleScreen.tsx";
import LanguageToggle from "../islands/LanguageToggle.tsx";
import { T } from "../state.ts";
import { State } from "./_middleware.tsx";

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
          <h1 class="text-2xl font-bold">My Portfolio</h1>
          <div class="flex items-center space-x-4">
            <LanguageToggle lang={props.state.lang} />
          </div>
        </header>
        <main>
          <TitleScreen />
        </main>
      </div>
    </>
  );
}
