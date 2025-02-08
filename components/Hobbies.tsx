import { T } from "../state.ts";

export default function Hobbies() {
  const t = T.value;
  if (!t) {
    return null;
  }

  return (
    <section class="py-12">
      <h2 class="text-3xl font-bold mb-6">{t.hobbies.title}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 class="text-xl font-semibold mb-2">Coffee</h3>
          <p>Your love for coffee...</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Baking</h3>
          <p>Your baking adventures...</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Sports</h3>
          <p>Your sports activities...</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Reading</h3>
          <p>Your reading habits...</p>
        </div>
      </div>
    </section>
  );
}
