function Bola() {
  var r, luasBola;
  r = parseInt(prompt(`Luas Bola = 4πr^2.\nMasukkan jari-jari (cm) = `));

  if (r && r > 0 && typeof r === "number") {
    luasBola = Math.round((4 * (22 / 7) * Math.pow(r, 2)) * 100) / 100;
    return alert(`Hasilnya adalah ${luasBola} cm^2`);
  } else {
    alert("Tolong masukkan angka dengan benar!");
  }
}

module.exports = Bola