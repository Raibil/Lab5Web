// script.js 
document.getElementById("pesan").textContent = "Hello World"; 
console.log("Hello World"); 

// Latihan 2
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

// Latihan 3
function operasiDasar(a, b) { 
  console.log("Penjumlahan:", a + b); 
  console.log("Pengurangan:", a - b); 
  console.log("Perkalian:", a * b); 
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol"); 
  console.log("Modulus:", a % b); 
} 
operasiDasar(9, 4);
// ===== Eksperimen 1: Input dua bilangan dari prompt =====
const inputA = prompt("Masukkan bilangan pertama:");
const inputB = prompt("Masukkan bilangan kedua:");

// prompt selalu menghasilkan string, jadi dikonversi ke number
const angkaA = Number(inputA);
const angkaB = Number(inputB);

if (inputA === null || inputB === null ||
    inputA.trim() === "" || inputB.trim() === "" ||
    Number.isNaN(angkaA) || Number.isNaN(angkaB)) {
  alert("Input tidak valid. Masukkan dua bilangan.");
} else {
  operasiDasar(angkaA, angkaB);
}

// Latihan 4
const inputNilai = prompt("Masukkan nilai (0–100):"); 
const nilaiMahasiswa = Number(inputNilai); 
 
if (inputNilai === null || inputNilai.trim() === "" || 
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) { 
  alert("Input nilai tidak valid."); 
} else if (nilaiMahasiswa >= 60) { 
  alert("Lulus"); 
} else { 
  alert("Belum lulus"); 
}

// Latihan 5
const inputPilihan = prompt("Masukkan angka 1–5:"); 
switch (inputPilihan) { 
  case "1": alert("Bilangan satu"); break; 
  case "2": alert("Bilangan dua"); break; 
  case "3": alert("Bilangan tiga"); break; 
  case "4": alert("Bilangan empat"); break; 
  case "5": alert("Bilangan lima"); break; 
  default: alert("Pilihan tidak tersedia"); 
} 

// Latihan 6
function cekBilangan() { 
  const input = document.getElementById("bilangan").value; 
  const angka = Number(input); 
  const hasil = document.getElementById("hasilBilangan"); 
 
  if (input.trim() === "" || !Number.isInteger(angka)) { 
    hasil.textContent = "Masukkan bilangan bulat yang valid."; 
  } else if (angka % 2 === 0) { 
    hasil.textContent = "Bilangan genap"; 
  } else { 
    hasil.textContent = "Bilangan ganjil"; 
  } 
} 

// Latihan 7
function ubahWarnaLatar(warna) { 
  document.body.style.backgroundColor = warna; 
} 

// Latihan 8
const daftarMenu = document.querySelectorAll(".menu"); 
daftarMenu.forEach((item) => { 
  item.addEventListener("change", hitungTotal); 
}); 
 
function hitungTotal() { 
  let total = 0; 
  daftarMenu.forEach((item) => { 
    if (item.checked) total += Number(item.value); 
  }); 
  document.getElementById("total").textContent = total.toLocaleString("id-ID"); 
} 

// Mini Proyek
function hitungNilaiAkhir(tugas, uts, uas) { 
return tugas * 0.30 + uts * 0.30 + uas * 0.40; 
} 
function tentukanPredikat(nilai) { 
if (nilai >= 85) return "A"; 
if (nilai >= 75) return "B"; 
if (nilai >= 60) return "C"; 
if (nilai >= 50) return "D"; 
return "E"; 
} 
const tugas = 85; 
const uts = 78; 
const uas = 88; 
const akhir = hitungNilaiAkhir(tugas, uts, uas); 
console.log("Nilai akhir:", akhir.toFixed(2)); 
console.log("Predikat:", tentukanPredikat(akhir)); 
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");

// ===== Eksperimen 2: Tabel perkalian 7 =====
for (let i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + (7 * i));
}

// ===== Eksperimen 3: Function cekGenap =====
function cekGenap(angka) {
  return angka % 2 === 0;
}

console.log("cekGenap(4):", cekGenap(4));
console.log("cekGenap(7):", cekGenap(7));
console.log("cekGenap(0):", cekGenap(0));
console.log("cekGenap(-6):", cekGenap(-6));
console.log("cekGenap(-3):", cekGenap(-3));

// ===== Eksperimen 4: Validasi kolom tidak boleh kosong =====
document.getElementById("formKosong").addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("namaForm").value;
  const email = document.getElementById("emailForm").value;
  const pesan = document.getElementById("pesanForm");

  if (nama.trim() === "" || email.trim() === "") {
    pesan.style.color = "red";
    pesan.textContent = "Semua kolom wajib diisi.";
  } else {
    pesan.style.color = "green";
    pesan.textContent = "Data berhasil dikirim: " + nama.trim() + " (" + email.trim() + ")";
  }
});

// ===== Eksperimen 6: Sembunyikan / tampilkan elemen =====
const tombolToggle = document.getElementById("tombolToggle");
const elemenToggle = document.getElementById("elemenToggle");

tombolToggle.addEventListener("click", function () {
  if (elemenToggle.style.display === "none") {
    elemenToggle.style.display = "block";
    tombolToggle.textContent = "Sembunyikan";
  } else {
    elemenToggle.style.display = "none";
    tombolToggle.textContent = "Tampilkan";
  }
});