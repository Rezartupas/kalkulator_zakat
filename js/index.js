document.getElementById("zakatForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Ambil nilai dari input
    let totalAssets = document.getElementById("totalAssets").value;
    
    // Hitung zakat maal (2.5%)
    let zakat = totalAssets * 0.025;
    
    // Tampilkan hasil
    document.getElementById("zakatAmount").innerText = zakat.toFixed(0) + " IDR";
  });
  