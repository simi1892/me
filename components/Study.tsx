interface StudyProps {
  title: string;
  more: string;
  dateFrom: string;
  dateTo: string;
  description: string;
  link?: string;
}

export default function Study(
  { title, more, dateFrom, dateTo, description, link }: StudyProps,
) {
  return (
    <article class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h3 class="text-xl font-semibold text-primary">{title}</h3>
        <span class="text-gray-600 text-sm mt-1 md:mt-0">
          {dateFrom} - {dateTo}
        </span>
      </div>
      <p class="text-gray-700 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block text-primary hover:text-primary/80 underline text-sm transition"
        >
          {more}
        </a>
      )}
    </article>
  );
}
