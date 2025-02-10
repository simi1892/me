import { T } from "../state.ts";
import Hobby from "./Hobby.tsx";
import { Book, Cake, Coffee, Dumbbell } from "lucide-preact";

const hobbyIcons = {
  coffee: Coffee,
  baking: Cake,
  sports: Dumbbell,
  reading: Book,
};

export default function Hobbies() {
  const t = T.value;
  if (!t) {
    return null;
  }

  return (
    <section class="py-16 bg-secondary/10">
      <div class="container px-4">
        <h2 class="text-3xl font-bold text-center mb-12">{t.hobbies.title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.hobbies.items.map((hobby) => {
            const Icon = hobbyIcons[hobby.icon as keyof typeof hobbyIcons];
            return (
              <Hobby
                key={hobby.icon}
                icon={<Icon />}
                title={hobby.title}
                summary={hobby.summary}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
