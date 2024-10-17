let skorTesCoding = 20;
let skorWawancara = "B";
let statusTesCoding = "";
let statusWawancara = "";


if (skorTesCoding > 85) {
    statusTesCoding = "LULUS";
    console.log("Hasil Tes Coding: " + statusTesCoding);
} else if (skorTesCoding > 65) {
    statusTesCoding = "DIPERTIMBANGKAN";
    console.log("Hasil Tes Coding: " + statusTesCoding);
} else {
    statusTesCoding = "TIDAK LULUS";
    console.log("Hasil Tes Coding: " + statusTesCoding);
}

if (skorWawancara === "A" || skorWawancara === "B") {
    statusWawancara = "LULUS";
    console.log("Hasil Wawancara: " + statusWawancara);
} else {
    statusWawancara = "TIDAK LULUS";
    console.log("Hasil Wawancara: " + statusWawancara);
}

if (statusTesCoding === "LULUS" && statusWawancara === "LULUS") {
    console.log("Selamat, Kamu berhasil diterima sebagai Programmer Junior!");
} else if (statusTesCoding === "DIPERTIMBANGKAN" && statusWawancara === "LULUS") {
    console.log("Selamat, Kamu berpeluang menjadi Programmer Junior. Tunggu konfirmasi selanjutnya.");
} else {
    console.log("Maaf, Kamu belum berhasil diterima sebagai Programmer Junior.");
}
