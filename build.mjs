import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  plugins: [
    dts({ compilationOptions: { preferredConfigPath: "./tsconfig.json" } }),
  ],
  sourcemap: "external",
  minify: false,
  target: "bun",
});
