// Fungsi untuk mengambil harga emas terkini
let hargaEmas = 1247259; // Default value

async function updateHargaEmas() {
    try {
        const response = await fetch('https://harga-emas.org/');
        const text = await response.text();
        
        // Extract harga emas per gram from the page content
        const regex = /Gram \(gr\)<\/td>\s*<td[^>]*>([0-9,.]+)/;
        const match = text.match(regex);
        
        if (match) {
            // Convert string price to number (remove commas and convert to integer)
            const price = parseInt(match[1].replace(/,/g, ''));
            hargaEmas = price;
            console.log('Harga emas updated:', hargaEmas);
        }
    } catch (error) {
        console.error('Error fetching gold price:', error);
        // Fallback price remains unchanged if fetch fails
    }
}

// Update harga emas setiap 1 jam
updateHargaEmas();
setInterval(updateHargaEmas, 3600000);

document.getElementById('zakatForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const totalAssets = document.getElementById('totalAssets').value;
    const expenses = document.getElementById('expenses').value;
    const zakatType = document.getElementById('jenisZakat').value;
  
    let zakatAmount = 0;
    let hartaBersih = 0;
  
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
  