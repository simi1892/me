import { ComponentChildren } from "preact";

interface HobbyProps {
  icon: ComponentChildren;
  title: string;
  summary: string;
}

export default function Hobby({ icon, title, summary }: HobbyProps) {
  return (
    <>
      <div
        key={title}
        class="rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
      >
        <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 class="text-xl font-semibold mb-2">{title}</h3>
        <p class="text-muted-foreground">{summary}</p>
      </div>
    </>
  );
}
