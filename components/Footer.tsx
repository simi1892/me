import { T } from "../state.ts";
import { GitHubIcon } from "./Icons.tsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = T.value;

  if (!t) {
    return null;
  }

  return (
    <footer class="w-full py-12 mt-auto bg-gradient-to-t from-secondary/10 to-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-primary">About</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              {t.about.summary}
            </p>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-primary">Connect</h3>
            <div class="flex space-x-4">
              <a
                href="https://github.com/simi1892/me"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-primary transition-colors"
                title="GitHub"
              >
                <span class="sr-only">GitHub</span>
                {GitHubIcon}
              </a>
            </div>
          </div>
        </div>

        <div class="pt-8 border-t border-gray-200">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-sm text-gray-600">
              © {currentYear} Simon Egli. Use it as you want.
            </p>
            <p class="text-sm text-gray-600">
              Made with <span class="text-red-500">♥</span> using Fresh and Deno
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
