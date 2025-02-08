import { T } from "../state.ts";

export default function Business() {
  const t = T.value;
  if (!t) {
    return null;
  }
  
  return (
    <section class="py-12">
      <h2 class="text-3xl font-bold mb-6">{t.business.title}</h2>
      <p>Details about your business experience...</p>
    </section>
  );
}
