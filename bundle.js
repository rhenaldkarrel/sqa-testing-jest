function Bola() {
  var r, luasBola;
  r = parseInt(prompt(`Luas Bola = 4πr^2.\nMasukkan jari-jari (cm) = `));

  if (r && r > 0 && typeof r === "number") {
    luasBola = Math.round(4 * (22 / 7) * Math.pow(r, 2) * 100) / 100;
    return alert(`Hasilnya adalah ${luasBola} cm^2`);
  } else {
    alert("Tolong masukkan angka dengan benar!");
  }
}

function Balok() {
  var p, l, t, luasBalok;

  p = parseInt(prompt("Luas Balok = 2 (pl + pt + lt).\nMasukkan p (cm) = "));

  if (p && p > 0 && typeof p === "number") {
    l = prompt(`Luas Balok = 2 (pl + pt + lt).\nMasukkan l (cm) = `);
    if (l && l > 0) {
      t = prompt(`Luas Balok = 2 (pl + pt + lt). \nMasukkan t (cm) = `);
      if (t && t > 0) {
        luasBalok = Math.round(2 * (p * l + p * t + l * t) * 100) / 100;
        return alert(`Hasilnya adalah ${luasBalok}`);
      } else {
        return alert("Tolong masukkan angka dengan benar!");
      }
    } else {
      return alert("Tolong masukkan angka dengan benar!");
    }
  } else {
    return alert("Tolong masukkan angka dengan benar!");
  }
}

function Lingkaran() {
  var r, luasLingkaran;
  r = parseInt(prompt("Luas Lingkaran = πr^2.\nMasukkan jari-jari (cm) = "));

  if (r && r > 0 && typeof r === "number") {
    luasLingkaran = Math.round(((22 / 7) * Math.pow(r, 2)) * 100) / 100;
    return alert(`Hasilnya adalah ${luasLingkaran} cm^2`);
  } else {
    return alert("Tolong masukkan angka dengan benar!");
  }
}