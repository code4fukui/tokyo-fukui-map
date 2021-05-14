import { parse } from "https://taisukef.github.io//j-toml/dist/ESM/j-toml.min.js";

const fn = "../index.toml";
const data = parse(await Deno.readTextFile(fn), 1.0, "\n");
console.log(data);
