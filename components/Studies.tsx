import { T } from "../state.ts";
import Study from "./Study.tsx";

export default function Studies() {
  const t = T.value;
  if (!t) return null;

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {t.studies.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
