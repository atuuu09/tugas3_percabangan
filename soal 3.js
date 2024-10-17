let nomorPemain = 60;
let posisi1 = "";
let posisi2 = "";
let posisi3 = "";


if (nomorPemain % 2 === 0 && nomorPemain >= 50 && nomorPemain <= 100) {
    posisi1 = "Penyerang Utama";
    posisi2 = "Berhak dipilih menjadi Kapten Tim";
} else if (nomorPemain % 2 === 0) {
    posisi1 = "Penyerang Utama";
} else if (nomorPemain % 2 === 1 && nomorPemain % 3 === 0 && nomorPemain % 5 === 0 && nomorPemain > 90) {
    posisi1 = "Bek Tengah";
    posisi2 = "Penjaga Gawang";
    posisi3 = "Playmaker";
} else if (nomorPemain % 2 === 1 && nomorPemain % 3 === 0 && nomorPemain % 5 === 0) {
    posisi1 = "Bek Tengah";
    posisi2 = "Penjaga Gawang";
} else if (nomorPemain % 2 === 1 && nomorPemain > 90) {
    posisi1 = "Bek Tengah";
    posisi2 = "Playmaker";
} else if (nomorPemain % 2 === 1) {
    posisi1 = "Bek Tengah";
}

console.log(
    "Nomor pemain " + nomorPemain + " digunakan oleh posisi:\n" +
    "Posisi 1: " + posisi1 + "\n" +
    "Posisi 2: " + posisi2 + "\n" +
    "Posisi 3: " + posisi3 + "\n"
);
