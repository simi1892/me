import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { T } from "../state.ts";
import { Translation } from "../translation/types.ts";
import { State } from "./_middleware.tsx";
import { ArrowRight } from "lucide-preact";

export type ContactForm = {
  email: string;
  message: string;
};

const NTFY_TOPIC = Deno.env.get("NTFY_TOPIC");
console.log(Deno.env.toObject())
if (NTFY_TOPIC === undefined) {
  throw Error("NTFY_TOPIC environment variable must be set");
}

export function handle(searchParams: URLSearchParams) {
  if (searchParams.has("email") && searchParams.has("message")) {
    const email = searchParams.get("email")!;
    const message = searchParams.get("message")!;
    fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: "POST",
      body: message,
      headers: {
        Title: `New message from ${email}`,
      },
    });
    return {
      email,
      message,
    };
  }
  throw Error("No email or message provided");
}

type Data = {
  contactForm: ContactForm;
  lang: State["lang"];
  t: Translation;
};

export const handler: Handlers<Data, State> = {
  GET(req, ctx) {
    return ctx.render({
      contactForm: handle(new URL(req.url).searchParams),
      lang: ctx.state.lang,
      t: ctx.state.t,
    });
  },
};

export default function Blog(props: PageProps<Data>) {
  T.value = props.data.t;
  const t = T.value;
  if (!t) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Thank You - Simon Egli</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="px-6 py-8">
            <div class="text-center">
              <h2 class="text-3xl font-extrabold text-gray-900 mb-4">
                {t.contact.thankYou}
              </h2>
              <p class="text-lg text-gray-600 mb-8">
                {t.contact.messageReceived}
              </p>
            </div>

            <div class="border-t border-gray-200 pt-6">
              <div class="mb-4">
                <h3 class="text-sm font-medium text-gray-500 uppercase">
                  {t.contact.email}:
                </h3>
                <p class="mt-1 text-gray-900">{props.data.contactForm.email}</p>
              </div>

              <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase">
                  {t.contact.message}:
                </h3>
                <p class="mt-1 text-gray-900 whitespace-pre-wrap">
                  {props.data.contactForm.message}
                </p>
              </div>
            </div>

            <div class="mt-8 text-center">
              <a
                href="/"
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
              >
                {"Home"}
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
