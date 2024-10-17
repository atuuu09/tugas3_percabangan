let usia = 10;
let tinggiBadan = 140;
let biayaMasuk = 0;

if (usia < 2) {
    console.log("Dilarang masuk, anak terlalu kecil.");
} else if (usia >= 2 && usia <= 4) {
    biayaMasuk = 25000;
    if (tinggiBadan > 80) {
        biayaMasuk += 8000;
    }
    console.log("Biaya masuk untuk usia " + usia + " tahun dengan tinggi " + tinggiBadan + " cm adalah Rp."
                 + biayaMasuk);
} else if (usia > 4 && usia <= 8) {
    biayaMasuk = 35000;
    if (tinggiBadan > 110) {
        biayaMasuk += 12000;
    }
    console.log("Biaya masuk untuk usia " + usia + " tahun dengan tinggi " + tinggiBadan + " cm adalah Rp."
                 + biayaMasuk);
} else if (usia > 8 && usia <= 12) {
    biayaMasuk = 45000;
    if (tinggiBadan > 130) {
        biayaMasuk += 15000;
    }
    console.log("Biaya masuk untuk usia " + usia + " tahun dengan tinggi " + tinggiBadan + " cm adalah Rp."
                 + biayaMasuk);
} else {
    biayaMasuk = 70000;
    if (tinggiBadan > 150) {
        biayaMasuk += 10000;
    }
    console.log("Biaya masuk untuk usia " + usia + " tahun dengan tinggi " + tinggiBadan + " cm adalah Rp."
                 + biayaMasuk);
}
