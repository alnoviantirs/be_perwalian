import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { iniTabel } from "../temp/table.js";
export function isiTablePerwalian(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        iniTabel.replace("#NAMA#", value.nama)
            .replace("#NOHP#", value.phone_number)
            .replace("#JURUSAN#", value.jurusan);
    addInner("iniTabel", content);
}