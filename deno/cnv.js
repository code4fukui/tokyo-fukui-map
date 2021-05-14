import { CSV } from "https://js.sabae.cc/CSV.js";
import { Geo3x3 } from "https://geo3x3.com/Geo3x3.js";

const data = CSV.decode(await Deno.readTextFile("tokyo-fukui-map_ll.csv"));
console.log(data);
for (let i = 1; i < data.length; i++) {
    const d = data[i];
    if (d[1].charAt(0) != "E") {
        const code = Geo3x3.encode(d[1], d[2], 20);
        console.log(code);
        d[1] = code;
        d[2] = "";
    }
}
await Deno.writeTextFile("c.csv", CSV.encode(data));
