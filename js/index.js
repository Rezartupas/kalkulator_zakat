document.getElementById('zakatForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const totalAssets = document.getElementById('totalAssets').value;
    const expenses = document.getElementById('expenses').value;
    const zakatType = document.getElementById('jenisZakat').value;
  
    let zakatAmount = 0;
    let hartaBersih = 0;
    const hargaEmas = 1247259; // Harga emas per gram
  
    // Menghitung zakat maal berdasarkan jenis zakat yang dipilih
    if (zakatType === 'penghasilan' || zakatType === 'tabungan') {
      zakatAmount = (totalAssets - expenses) * 0.025;
    } else if (zakatType === 'emas') {
      zakatAmount = (totalAssets / hargaEmas) * 0.025 * hargaEmas;
    } else if (zakatType === 'perdagangan') {
      zakatAmount = (totalAssets - expenses) * 0.025;
    }
 
    if (zakatType === 'penghasilan' || zakatType === 'tabungan') {
        hartaBersih = (totalAssets - expenses) - 0.025;
      } else if (zakatType === 'emas') {
        hartaBersih = (totalAssets / hargaEmas) - 0.025 * hargaEmas;
      } else if (zakatType === 'perdagangan') {
        hartaBersih = (totalAssets - expenses) - 0.025;
      }

    // Cek apakah zakatAmount kurang dari nisab (85 kali harga emas)
    const nisab = hargaEmas * 85;
    if (hartaBersih < nisab) {
      alert("Belum wajib zakat nih, sedekah aja ya?");
      window.location.href = "https://salingberbagi.or.id";
    } else {
      // Update hasil perhitungan jika memenuhi syarat zakat
      document.getElementById('zakatAmount').textContent = zakatAmount.toLocaleString() + " IDR";
    }
  });
  