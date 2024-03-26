var layar = document.getElementById("layar");
var angkaSebelumnya = null;
var operator = null;

function tambahAngka(angka) {
  layar.value += angka;
}

function operasi(op) {
  if (angkaSebelumnya === null) {
    angkaSebelumnya = layar.value;
  } else {
    hitung();
  }
  operator = op;
  layar.value = "";
}

function hitung() {
  var angkaSekarang = layar.value;
  var hasil = 0;
  switch (operator) {
    case "+":
      hasil = parseFloat(angkaSebelumnya) + parseFloat(angkaSekarang);
      break;
    case "-":
      hasil = parseFloat(angkaSebelumnya) - parseFloat(angkaSekarang);
      break;
    case "*":
      hasil = parseFloat(angkaSebelumnya) * parseFloat(angkaSekarang);
      break;
    case "/":
      hasil = parseFloat(angkaSebelumnya) / parseFloat(angkaSekarang);
      break;
  }
  layar.value = hasil;
  angkaSebelumnya = null;
  operator = null;
}

function hapus() {
  layar.value = "";
  angkaSebelumnya = null;
  operator = null;
        }
    
