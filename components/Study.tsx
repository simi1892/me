interface StudyProps {
    title: string;
    more: string;
    dateFrom: string;
    dateTo: string;
    description: string;
    link?: string;
  }
  
  export default function Study({ title, more, dateFrom, dateTo, description, link }: StudyProps) {
    return (
      <article className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-baseline mb-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-gray-600 text-sm">
            {dateFrom} - {dateTo}
          </span>
        </div>
        <p className="text-gray-700 mb-3">{description}</p>
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            {more}
          </a>
        )}
      </article>
    );
  }