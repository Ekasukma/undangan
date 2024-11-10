// Set tanggal acara pernikahan (contoh: 25 November 2024, jam 10:00)
var weddingDate = new Date("Nov 25, 2024 10:00:00").getTime();

// Update countdown setiap detik
var x = setInterval(function() {

    // Dapatkan tanggal dan waktu saat ini
    var now = new Date().getTime();

    // Hitung jarak waktu antara sekarang dan tanggal pernikahan
    var distance = weddingDate - now;

    // Hitung waktu yang tersisa dalam hari, jam, menit, dan detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil countdown
    document.getElementById("countdown").innerHTML = days + " Hari " + hours + " Jam "
    + minutes + " Menit " + seconds + " Detik ";

    // Jika countdown selesai, tampilkan pesan
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Acara Pernikahan Dimulai!";
    }
}, 1000);
