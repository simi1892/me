import { T } from "../state.ts";

export default function FriendReviews() {
  const t = T.value;
  if (!t) {
    return null;
  }

  return (
    <section class="py-12">
      <h2 class="text-3xl font-bold mb-6">{t.friendReviews.title}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-100 p-6 rounded-lg">
          <p class="mb-4">"Great person to work with!"</p>
          <p class="font-semibold">- Friend 1</p>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg">
          <p class="mb-4">"Always reliable and creative."</p>
          <p class="font-semibold">- Friend 2</p>
        </div>
      </div>
    </section>
  );
}
