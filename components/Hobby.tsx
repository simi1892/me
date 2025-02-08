import { ComponentChildren } from "preact";

interface HobbyProps {
  icon: ComponentChildren;
  title: string;
  summary: string;
}

export default function Hobby({ icon, title, summary }: HobbyProps) {
  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md">
      <div className="absolute top-4 right-4 text-gray-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{summary}</p>
    </div>
  );
}
