import { T } from "../state.ts";

export default function Contact() {
  const t = T.value;
  if (!t) {
    return null;
  }

  return (
    <section class="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">{t.contact.title}</h2>
        <form action="/send" class="max-w-md mx-auto space-y-6">
          <div>
            <label
              htmlFor="email"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={10000}
              rows={6}
              class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
          <button
            type="submit"
            class="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
          >
            {t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
