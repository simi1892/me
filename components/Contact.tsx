import { T } from "../state.ts";

export default function Contact() {
  const t = T.value;
  if (!t) {
    return null;
  }
  
  return (
    <section class="py-12">
      <h2 class="text-3xl font-bold mb-6">{t.contact.title}</h2>
      <p>some contact form</p>
    </section>
  );
}
