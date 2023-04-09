import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.biodata.phone_number)
            .replace("#JURUSAN#", value.biodata.jurusan)
            .replace("#NAMAWALDOS#", value.walidosen.nama)
            .replace("#TANGGAL#", value.time.tanggal)
            .replace("#HARI#", value.time.hari)
            .replace("#JAM#", value.time.jam)
            .replace("#LOKASI#", value.lokasi)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}