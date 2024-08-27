const tanggalTujuan = new Date('October 1, 2024 00:00:00').getTime();

const cd = setInterval(() => {
    const hariIni = new Date().getTime();
    const selisihHari = tanggalTujuan - hariIni;
   const hari = Math.floor(selisihHari / (1000 * 60 * 60 * 24));
   const jam = Math.floor((selisihHari % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const menit = Math.floor((selisihHari % (1000 * 60 * 60)) / (1000 * 60));
   const detik = Math.floor((selisihHari % (1000 * 60)) / 1000);
   document.getElementById('days').innerHTML = hari;
   document.getElementById('hours').innerHTML = jam;
   document.getElementById('minutes').innerHTML = menit;
   document.getElementById('seconds').innerHTML = detik;
}, 1000)