// 1. Mengimpor fungsi yang akan diuji
function Bola(r){
    if (r && r > 0 && typeof r === "number") {
    return Math.round(4 * (22 / 7) * Math.pow(r, 2) * 100) / 100;
  } else {
    throw "Tolong masukkan angka dengan benar!";
  }
}

// 2. Membuat test cases yang akan diuji
// a. pengujian apabila input data yang dimasukkan tidak kosong
describe.each([{ r: 7 }, { r: 8 }])("cek input data r = $r tidak boleh undefined/kosong", ({ r }) => {
  test("input data tidak boleh kosong", () => {
    // fungsi expect melakukan pengujian terhadap hasil dari fungsi Bola() dengan kasus2 parameter yang ada merupakan hasil yang tidak undefined/kosong. Jika tidak, maka ada kesalahan pada input yang dimasukkan user.
    expect(Bola(r)).not.toBeNull();
  });
});

// b. pengujian apabila input data yang dimasukkan bukan bilangan negatif atau noll
describe.each([{ r: 7 }, { r: 8 }, { r: 9 }])("cek input data r = $r tidak boleh bilangan negatif atau nol", ({ r }) => {
  test("input data tidak boleh bilangan negatif atau nol", () => {
    // fungsi expect melakukan pengujian terhadap hasil dari fungsi Bola() dengan kasus2 parameter yang ada merupakan hasil yang bukan merupakan bilangan negatif atau nol. Jika tidak, maka ada kesalahan pada input yang dimasukkan user.
    expect(Bola(r)).not.toBeNaN();
  });
});

// c. pengujian apabila input data yang dimasukkan bertipe data number
describe.each([{ r: 7 }, { r: 8 }, { r: 9 }])("cek tipe data input r = $r harus berupa number", ({ r }) => {
  test("input data harus berupa number", () => {
    // fungsi expect melakukan pengujian terhadap hasil dari fungsi Bola() dengan kasus2 parameter yang ada merupakan hasil yang bertipe data number (bukan string, undefined,dll). Jika tidak, maka ada kesalahan pada input yang dimasukkan user.
    expect(Bola(r)).not.toBeNaN();
  });
});

// d. pengujian output yang dihasilkan untuk sesuai dengan expected outcome
describe.each([
  { r: 7, expected: 616 },
  { r: 8, expected: 804.57 },
])("menghitung luas bola dengan r = $r akan menghasilkan $expected", ({ r, expected }) => {
  test("mengecek output untuk beberapa r", () => {
    // fungsi expect melakukan pengujian terhadap hasil dari fungsi Bola() dengan kasus2 parameter yang ada merupakan hasil yang sesuai dengan expected outcome
    expect(Bola(r)).toBe(expected);
  });
});