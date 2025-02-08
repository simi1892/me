import { Head } from "$fresh/runtime.ts";
import TitleScreen from "../components/TitleScreen.tsx"

export default function Home() {
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
            <p>Kommt</p>
          </div>
        </header>
        <main>
          <TitleScreen />
        </main>
      </div>
    </>
  );
}
