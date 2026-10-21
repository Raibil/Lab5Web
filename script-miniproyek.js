// ===== Mini Project: Kalkulator Nilai Mahasiswa =====

// --- Bagian perhitungan (tidak menyentuh tampilan) ---
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

function tentukanStatus(nilai) {
  return nilai >= 60 ? "Lulus" : "Belum lulus";
}

// --- Bagian validasi ---
// Mengembalikan angka jika valid, atau null jika tidak valid
function validasiNilai(teks) {
  if (teks.trim() === "") return null;
  const angka = Number(teks);
  if (Number.isNaN(angka) || angka < 0 || angka > 100) return null;
  return angka;
}

// --- Bagian tampilan ---
function tampilkanHasil(akhir) {
  document.getElementById("hasilAkhir").textContent = akhir.toFixed(2);
  document.getElementById("hasilPredikat").textContent = tentukanPredikat(akhir);
  document.getElementById("hasilStatus").textContent = tentukanStatus(akhir);
  document.getElementById("hasil").hidden = false;
}

function tampilkanError(pesan) {
  document.getElementById("pesanError").textContent = pesan;
  document.getElementById("hasil").hidden = true;
}

// --- Event handler form ---
document.getElementById("formNilai").addEventListener("submit", function (event) {
  event.preventDefault();

  const tugas = validasiNilai(document.getElementById("tugas").value);
  const uts = validasiNilai(document.getElementById("uts").value);
  const uas = validasiNilai(document.getElementById("uas").value);

  if (tugas === null || uts === null || uas === null) {
    tampilkanError("Semua nilai harus diisi dengan angka antara 0 dan 100.");
    return;
  }

  document.getElementById("pesanError").textContent = "";
  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  tampilkanHasil(akhir);
});