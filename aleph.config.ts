import Processor from "https://esm.sh/windicss@3.4.0";
import type { Config, Plugin } from "aleph/types";
import config from "./windi.config.ts";

const windicss: Plugin = {
  name: "windicss",
  setup: (aleph) => {
    const windi = new Processor(config);
    aleph.onTransform(/\.(j|t)sx$/i, async ({ module, code, bundleMode }) => {
      const { specifier, jsxStaticClassNames } = module;
      if (jsxStaticClassNames?.length) {
        const url = specifier.replace(/\.(j|t)sx$/i, "") + ".tailwind.css";
        const interpretedSheet =
          windi.interpret(jsxStaticClassNames.join(" ")).styleSheet;
        const minify = aleph.mode === "production";
        // todo: treeshake prefilght
        const css = interpretedSheet.extend(windi.preflight()).build(minify);
        const cssModule = await aleph.addModule(url, css, true);

        return {
          // import tailwind css
          code: `import "${
            aleph.resolveImport(cssModule, specifier, bundleMode, true)
          }";${code}`,
          // support SSR
          extraDeps: [{ specifier: url, virtual: true }],
        };
      }
    });
  },
};

export default <Config> {
  plugins: [windicss],
};
