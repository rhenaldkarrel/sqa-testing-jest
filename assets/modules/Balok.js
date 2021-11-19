function Balok() {
  var p, l, t, luasBalok;

  p = parseInt(prompt("Luas Balok = 2 (pl + pt + lt).\nMasukkan p (cm) = "));

  if (p && p > 0 && typeof p === 'number') {
    l = prompt(`Luas Balok = 2 (pl + pt + lt).\nMasukkan l (cm) = `);
    if (l && l > 0) {
      t = prompt(`Luas Balok = 2 (pl + pt + lt). \nMasukkan t (cm) = `);
      if (t && t > 0) {
        luasBalok = Math.round((2 * (p * l + p * t + l * t)) * 100) / 100;
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

module.exports = Balok