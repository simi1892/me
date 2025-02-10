import { T } from "../state.ts";
import StrengthCard from "./StrengthCard.tsx";

export default function Strengths() {
  const t = T.value;
  if (!t) {
    return null;
  }

  const strengths = Object.entries(t.strengths)
    .filter(([key]) => !isNaN(+key))
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([_, value]) => value);

  return (
    <section class="py-16">
      <div class="container px-4">
        <h2 class="text-3xl font-bold text-center mb-12">
          {t.strengths.title}
        </h2>
        <p>{t.strengths.description}</p>
        <p>
          <a
            href={t.strengths.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600"
          >
            {t.strengths.urlText}
          </a>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <StrengthCard key={index + 1} number={index + 1} title={strength} />
          ))}
        </div>
      </div>
    </section>
  );
}
