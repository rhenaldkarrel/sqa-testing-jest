// 1. Mengimpor fungsi yang akan diuji
function Balok(p, l, t) {
  if (p && p > 0 && typeof p === "number") {
    return Math.round((2 * (p * l + p * t + l * t)) * 100) / 100
  } else {
    throw "Tolong masukkan angka dengan benar!";
  }
}

// 2. Membuat test cases yang akan diuji
// Dynamic Test pada Jest dilakukan dengan menggunakan fungsi describe.each(). Kemudian memasukkan kasus-kasus parameter yang ingin diuji
// a. pengujian apabila input data yang dimasukkan tidak kosong
describe.each([{ p: 7, l: 8, t: 9 }, { p: undefined, l: undefined, t: undefined }])("cek input data p = $p, l = $l, t = $t tidak boleh undefined/kosong", ({ p, l, t }) => {
  test("input data tidak boleh kosong", () => {
    // fungsi expect melakukan pengujian terhadap hasil dari fungsi Balok() dengan kasus2 parameter yang ada merupakan hasil yang tidak undefined/kosong. Jika tidak, maka ada kesalahan pada input yang dimasukkan user.
    expect(Balok(p, l, t)).not.toBeNull();
  });
});

// b. pengujian apabila input data yang dimasukkan bukan bilangan negatif atau noll
describe.each([{ p: 7, l: 8, t: 9 }, { p: 7, l: 0, t: 0 },{ p: 7, l: -7, t: 9 } ])("cek input data p = $p, l = $l, t = $t tidak boleh bilangan negatif atau nol", ({ p, l, t }) => {
  test("input data tidak boleh bilangan negatif atau nol", () => {
    // fungsi expect melakukan pengujian terhadap hasil dari fungsi Balok() dengan kasus2 parameter yang ada merupakan hasil yang bukan merupakan bilangan negatif atau nol. Jika tidak, maka ada kesalahan pada input yang dimasukkan user.
    expect(Balok(p, l, t)).not.toBeLessThanOrEqual(0);
  });
});

// c. pengujian apabila input data yang dimasukkan bertipe data number
describe.each([
  { p: 7, l: 8, t: 9 },
  { p: 7, l: null, t: "Lima" },
  { p: 7, l: undefined, t: undefined },
  { p: "12", l: "13", t: "14" },
])("cek tipe data input p = $p, l = $l, t = $t harus berupa number", ({ p, l, t }) => {
  test("input data harus berupa number", () => {
    // fungsi expect melakukan pengujian terhadap hasil dari fungsi Balok() dengan kasus2 parameter yang ada merupakan hasil yang bertipe data number (bukan string, undefined,dll). Jika tidak, maka ada kesalahan pada input yang dimasukkan user.
    expect(Balok(p, l, t)).not.toBeNaN();
  });
});

// d. pengujian output yang dihasilkan untuk sesuai dengan expected outcome
describe.each([
  { p: 7, l: 8, t: 9, expected: 382 },
  { p: 8, l: 9, t: 10, expected: 484 },
  { p: 1.5, l: 4.5, t: 15.34, expected: 197.58 },
])("menghitung luas balok dengan p = $p, l = $l, t = $t akan menghasilkan $expected", ({ p, l, t, expected }) => {
  test("mengecek output untuk beberapa p, l, t", () => {
    // fungsi expect melakukan pengujian terhadap hasil dari fungsi Balok() dengan kasus2 parameter yang ada merupakan hasil yang sesuai dengan expected outcome
    expect(Balok(p, l, t)).toBe(expected);
  });
});