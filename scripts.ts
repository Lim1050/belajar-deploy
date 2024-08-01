document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simpan data atau kirim ke server (dalam contoh ini, hanya menampilkan alert)
    alert(`Pendaftaran berhasil!\nNama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nPesan: ${message}`);

    // Reset form setelah pengiriman
    this.reset();
});