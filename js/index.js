document.getElementById('zakatForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const totalAssets = document.getElementById('totalAssets').value;
    const expenses = document.getElementById('expenses').value;
    const zakatType = document.getElementById('jenisZakat').value;
  
    let zakatAmount = 0;
  
    // Menghitung zakat maal berdasarkan jenis zakat yang dipilih
    if (zakatType === 'penghasilan' || zakatType === 'tabungan') {
      zakatAmount = (totalAssets - expenses) * 0.025;
    } else if (zakatType === 'emas') {
      // Asumsikan harga emas dalam IDR per gram
      const hargaEmas = 1410000; 
      zakatAmount = (totalAssets / hargaEmas) * 0.025 * hargaEmas;
    } else if (zakatType === 'perdagangan') {
      zakatAmount = (totalAssets - expenses) * 0.025;
    }
  
    // Update hasil perhitungan
    document.getElementById('zakatAmount').textContent = zakatAmount.toLocaleString() + " IDR";
  });
  