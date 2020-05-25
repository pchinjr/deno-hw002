// mod.test.ts
import { handler } from "./index.ts";

Deno.test("get-index handler exists", () => {
  if (!handler) {
    throw Error("missing module");
  }
});
