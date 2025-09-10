const whatsappLink = "https://wa.me/6281384928141?text=Halo%20saya%20ingin%20membeli%20e-book%20Statistika%20Parametrik";
//const emailLink = "mailto:chelsyyolanori07@gmail.com?subject=Beli%20E-Book%20Statistika%20Parametrik";

document.getElementById("buyBtn").addEventListener("click", function() {
  window.location.href = whatsappLink;
  // window.location.href = emailLink;
});