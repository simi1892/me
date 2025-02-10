import { asset } from "$fresh/runtime.ts";
import { T } from "../state.ts";

export default function Hero() {
  const t = T.value;

  if (!t) {
    return null;
  }

  return (
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div class="container px-4 py-16 md:py-24">
        <div class="text-center space-y-6">
          <img
            src={asset("/profile-picture.png")}
            alt="Profile Picture"
            class="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-lg"
          />
          <h1 class="text-4xl md:text-6xl font-bold tracking-tighter">
            {t.titleScreen.hello} 👋🏽
          </h1>
          <p class="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t.titleScreen.description}
          </p>
        </div>
      </div>
    </section>
  );
}
