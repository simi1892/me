import { T } from "../state.ts";
import { GitHubIcon } from "./Icons.tsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = T.value;

  return (
    <footer className="w-full py-8 mt-auto border-t bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">About</h3>
            <p className="text-sm text-gray-600">
              {t.about.summary}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Connect</h3>
            <div className="flex space-x-8">
              <a
                href="https://github.com/simi1892/me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="GitHub"
              >
                {GitHubIcon}
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Simon Egli. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
