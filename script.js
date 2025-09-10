const whatsappLink = "https://wa.me/6281384928141?text=Halo%20saya%20ingin%20membeli%20e-book%20Statistika%20Parametrik";
//const emailLink = "mailto:chelsyyolanori07@gmail.com?subject=Beli%20E-Book%20Statistika%20Parametrik";

document.getElementById("buyBtn").addEventListener("click", function() {
  window.location.href = whatsappLink;
  // window.location.href = emailLink;
});

const pdfFrame = document.getElementById('pdfPreview');
pdfFrame.onerror = function() {
    document.querySelector('.mobile-alert').innerHTML += 
    '<p style="color: red; margin-top: 10px;"><strong>PDF tidak dapat dimuat. Silakan gunakan tombol download di atas.</strong></p>';
};
        
// Periksa jika perangkat mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Tambahkan pesan untuk pengguna mobile
    const alertBox = document.querySelector('.mobile-alert');
    alertBox.innerHTML += '<p>Beberapa browser mobile tidak mendukung preview PDF. Silakan download file-nya untuk melihat.</p>';
}