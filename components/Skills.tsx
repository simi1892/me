import { T } from "../state.ts";
import { ComponentChildren } from "preact";
import {
  AngularIcon,
  DenoIcon,
  DjangoIcon,
  FreshIcon,
  GitHubIcon,
  JavaIcon,
  LinuxIcon,
  PythonIcon,
  TypeScriptIcon,
} from "./Icons.tsx";

interface SkillProps {
  name: string;
  rating: number;
  icon: ComponentChildren;
}

const iconMapping: { [key: string]: ComponentChildren } = {
  PythonIcon,
  TypeScriptIcon,
  JavaIcon,
  DjangoIcon,
  DenoIcon,
  FreshIcon,
  GitHubIcon,
  LinuxIcon,
  AngularIcon,
};

const Skill = ({ name, rating, icon }: SkillProps) => {
  return (
    <div class="flex items-center justify-between w-40 text-lg">
      <div class="flex items-center gap-2">
        <span class="w-6 h-6">{icon}</span>
        <span>{name}</span>
      </div>
      <span class="font-mono">{rating}</span>
    </div>
  );
};

export default function Skills() {
  const t = T.value;
  if (!t) {
    return null;
  }

  return (
    <section class="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-10 text-center">{t.skills.title}</h2>
        <div class="flex flex-wrap xl:grid grid-cols-5 justify-between gap-8 xl:gap-0 max-w-4xl mx-auto">
          <div class="flex flex-col gap-6 xl:col-start-1">
            {t.skills.column1.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                rating={skill.rating}
                icon={iconMapping[skill.icon]}
              />
            ))}
          </div>
          <div class="flex flex-col gap-6 xl:col-start-3">
            {t.skills.column2.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                rating={skill.rating}
                icon={iconMapping[skill.icon]}
              />
            ))}
          </div>
          <div class="flex flex-col gap-6 xl:col-start-5">
            {t.skills.column3.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                rating={skill.rating}
                icon={iconMapping[skill.icon]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
