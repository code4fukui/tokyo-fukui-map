import { TOML } from "https://js.sabae.cc/TOML.js";

const fn = "../index.toml";
const fnDst = "../index.html";

const data = TOML.parse(await Deno.readTextFile(fn));
console.log(data);
let s = [];
s.push('<!DOCTYPE html><html><head>');
s.push('<meta charset="utf-8">');
s.push('<meta name="viewport" content="width=device-width">');
for (const name in data) {
    const val = data[name];
    if (name == "title") {
        s.push(`<title>${val}</title>`);
    } else if (name == "script") {
        s.push(`<script type="module" src="${val}"></script>`);
    } else if (name == "module") {
        s.push(`<script type="module">\n${val}</script>`);
    } else if (name == "yaml") {
        s.push(`<script type="text/yaml">\n${val}</script>`);
    }
}
s.push("</head></html>");
const html = s.join("\n");
await Deno.writeTextFile(fnDst, html);
