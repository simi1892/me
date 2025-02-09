import { T } from "../state.ts";

export default function Contact() {
  const t = T.value;
  if (!t) {
    return null;
  }

  return (
    <section class="py-12">
      <h2 class="text-3xl font-bold mb-6">{t.contact.title}</h2>
      <form action="/send" class="max-w-md mx-auto space-y-4">
        <div>
          <label
            htmlFor="email"
            class="block text-sm font-medium text-gray-700"
          >
            {t.contact.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            class="block text-sm font-medium text-gray-700"
          >
            {t.contact.message}
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={10000}
            rows={10}
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <input
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        />
      </form>
    </section>
  );
}
