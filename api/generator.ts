import { VercelRequest, VercelResponse } from "@vercel/node";

const processDoubleSpaces = (str: string) => {
    let temp = str;
    do {
        str = temp;
        temp = str.replace("  ", " ");
    } while (temp !== str);
    return str;
};

export default function (req: VercelRequest, res: VercelResponse) {
    let background =
        req.query["background"] &&
        /^([0-9A-F]{3}){1,2}$/i.test(req.query["background"] as string)
            ? (req.query["background"] as string)
            : null;
    const color =
        req.query["color"] &&
        /^([0-9A-F]{3}){1,2}$/i.test(req.query["color"] as string)
            ? (req.query["color"] as string)
            : "fff";
    const name = req.query["initials"]
        ? (req.query["initials"] as string)
        : req.query["name"]
        ? processDoubleSpaces((req.query["name"] as string).trim())
        : "ERR";
    const dimension =
        req.query["dim"] && /^\d+$/.test(req.query["dim"] as string)
            ? Number.parseInt(req.query["dim"] as string)
            : 50;
    const fontSize =
        req.query["fontSize"] && /^\d+$/.test(req.query["fontSize"] as string)
            ? Number.parseInt(req.query["fontSize"] as string)
            : Math.round(dimension / 2);
    const rounded = req.query["rounded"]
        ? (req.query["rounded"] as string)
        : req.query["isRounded"] && req.query["isRounded"] === "true"
        ? "50%"
        : "0";
    const caseSel = req.query["case"] ? (req.query["case"] === "2" ? 2 : 0) : 1;

    const bold =
        req.query["bold"] && req.query["bold"] === "true" ? true : false;

    let letters = "";
    const subname = name.split(" ");
    if (!req.query["initials"])
        letters = subname[0][0] + (subname.length > 1 ? subname[subname.length - 1][0] : "");
    else letters = name;

    if (!background) {
        const colors = [
            "E284B3",
            "FFED8B",
            "681313",
            "F3C1C6",
            "735372",
            "009975",
            "FFBD39",
            "B1E8ED",
            "52437B",
            "F76262",
            "216583",
            "293462",
            "DD9D52",
            "936B93",
            "6DD38D",
            "888888",
            "6F8190",
            "BCA0F0",
            "AAF4DD",
            "96C2ED",
            "3593CE",
            "5EE2CD",
            "96366E",
            "E38080"
        ];
        const random_color_key = Math.floor(Math.random() * colors.length);
        background = colors[random_color_key];
    }

    letters = caseSel
        ? caseSel === 2
            ? letters.toLowerCase()
            : letters.toUpperCase()
        : letters;

    const style: string = bold ? "font-weight:700;" : "";

    const cacheAge =
        req.query["cache"] && /^\d+$/.test(req.query["cache"] as string)
            ? Number.parseInt(req.query["cache"] as string)
            : 63072000;

    const result = `<svg style="${style}" width="${dimension}px" height="${dimension}px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">@font-face {font-family: "montserratbold";src: url("https://cdn.oxro.io/fonts/montserrat-bold-webfont.woff2") format("woff2"),url("https://cdn.oxro.io/fonts/montserrat-bold-webfont.woff") format("woff");font-weight: normal;font-style: normal;}</style></defs><rect x="0" y="0" width="${dimension}px" height="${dimension}px" rx="${rounded}" style="fill:#${background}"/><text x="50%" y="50%" dy=".1em" fill="#${color}" text-anchor="middle" dominant-baseline="middle" style="font-family: &quot;Montserrat&quot;, sans-serif; font-size: ${fontSize}px; line-height: 1">${letters}</text></svg>`;

//     console.log(req.query);

    res.setHeader("Content-type", "image/svg+xml")
        .setHeader(
            "Cache-Control",
            `private max-age=${cacheAge} proxy-revalidate`
        )
        .send(result);
}
