// scripts.js
const whatsappNumber = "1234567890";

function contactWhatsApp(service) {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`שלום, אני מעוניין/ת ב${service}.`)}`;
    window.open(url, '_blank');
}
