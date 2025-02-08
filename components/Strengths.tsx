import { T } from "../state.ts";

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
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">{t.strengths.title}</h2>
      <p className="mt-6 text-sm text-gray-600">
        {t.strengths.description}
      </p>
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
      <ol className="space-y-4 mt-6">
        {strengths.map((strength, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center p-4">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-4 text-blue-600 font-semibold">
                {index + 1}
              </span>
              <span className="text-lg font-medium">{strength}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
