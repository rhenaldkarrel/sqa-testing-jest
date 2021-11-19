function Lingkaran() {
  var r, luasLingkaran;
  r = parseInt(prompt("Luas Lingkaran = πr^2.\nMasukkan jari-jari (cm) = "));

  if (r && r > 0 && typeof r === "number") {
    luasLingkaran = Math.round(((22 / 7) * Math.pow(r, 2) * 100)) / 100;
    return console.log(`Hasilnya adalah ${luasLingkaran} cm^2`);
  } else {
    return alert("Tolong masukkan angka dengan benar!");
  }
}

module.exports = Lingkaran