nama = "atuuu";
umur = 19;
tempatTinggal = "Boston";
tabungan = 500000;


if (umur > 40 && (tempatTinggal== "Nevada" || tempatTinggal== "New York" || tempatTinggal== "Havana") && tabungan > 10000000) {
    console.log(nama + ' kemungkinan adalah seorang anggota mafia dengan pangkat Don' );
}else if (umur <= 40 && umur >= 25 && (tempatTinggal == "New Jersey" || tempatTinggal == "Manhattan" || tempatTinggal == "Nevada")
        && tabungan >= 1000000 && tabungan <= 2000000 ){
    console.log(nama + ' kemungkinan adalah seorang anggota mafia dengan pangkat Underboss');
}else if (umur <= 24 && umur >= 18 && (tempatTinggal == "California" || tempatTinggal=="Detroit" || tempatTinggal == "Boston")
         && tabungan < 1000000 ){
    console.log(nama + ' kemungkinan adalah seorang anggota mafia dengan pangkat Capo');
}else{
    console.log(nama + ' Tidak mencurigakan');
}

