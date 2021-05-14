import { CSV } from "https://js.sabae.cc/CSV.js";

const data = CSV.toJSON(CSV.decode(await Deno.readTextFile("c.csv")));
for (const d of data) {
    //const id = d.url.substring(d.url.lastIndexOf("map") + 3, d.url.lastIndexOf("."));
    const id = d.id;
    d.description = `<a href=${d.url}>ふくいの足跡マップ ${id}</a><br>Geo3x3: <a href=https://geo3x3.com/#${d.geo3x3}>${d.geo3x3}</a>`;
}
await Deno.writeTextFile("../tokyo-fukui-history.csv", CSV.stringify(data));
