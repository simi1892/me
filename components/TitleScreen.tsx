import { asset } from "$fresh/runtime.ts";
import { T } from "../state.ts";

export default function TitleScreen() {
  const t = T.value;

  if (!t) {
    return null;
  }

  return (
    <div class="h-screen flex items-center justify-center bg-cover bg-center">
      <div class="text-center">
        <img
          src={asset("/profile-picture.png")}
          alt="Profile Picture"
          class="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-lg"
        />
        <h1 class="text-4xl font-bold mb-4 text-black">
          {t.titleScreen.hello}
        </h1>
        <p class="text-xl text-black">
          {t.titleScreen.description}
        </p>
      </div>
    </div>
  );
}
