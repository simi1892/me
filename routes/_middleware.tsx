import { FreshContext } from "$fresh/server.ts";

import de from "../translation/de.json" with { type: "json" };
import en from "../translation/en.json" with { type: "json" };
import { Translation } from "../translation/types.ts";

export type State = {
  lang: "en" | "de";
  t: Translation;
};

export async function handler(req: Request, ctx: FreshContext<State>) {
  const cookieHeader = req.headers.get("cookie");
  if (cookieHeader) {
    ctx.state.lang = cookieHeader.includes("lang=de") ? "de" : "en";
  } else {
    ctx.state.lang = "en";
  }

  ctx.state.t = ctx.state.lang === "de" ? de : en;

  const res = await ctx.next();
  return res;
}