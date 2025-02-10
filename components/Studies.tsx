import { T } from "../state.ts";
import Study from "./Study.tsx";

export default function Studies() {
  const t = T.value;
  if (!t) return null;

  return (
    <section class="py-16 bg-secondary/10">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-10 text-center">{t.studies.title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.studies.items.map((study) => (
            <Study
              key={study.title}
              title={study.title}
              more={t.studies.more}
              dateFrom={study.dateFrom}
              dateTo={study.dateTo}
              description={study.description}
              link={study.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
