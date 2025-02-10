import { T } from "../state.ts";

interface Experience {
  company: string;
  location: string;
  dateFrom: string;
  dateTo: string;
  role: string;
  description: string;
  responsibilities: string[];
}

export default function Business() {
  const t = T.value;
  if (!t) {
    return null;
  }

  return (
    <section class="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">{t.business.title}</h2>
        {t.business.items.map((exp: Experience, index: number) => (
          <div
            key={index}
            class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8"
          >
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 class="text-2xl font-semibold text-primary">{exp.company}</h3>
              <span class="text-gray-600 text-sm mt-1 md:mt-0">
                {exp.dateFrom} - {exp.dateTo}
              </span>
            </div>
            <p class="text-xl text-gray-700 mb-2">{exp.location}</p>
            <p class="text-lg font-medium text-gray-800 mb-4">{exp.role}</p>
            <p class="text-gray-700 leading-relaxed mb-4">{exp.description}</p>
            <ul class="space-y-2">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex} class="flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
