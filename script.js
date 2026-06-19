let slideIndex = 0;
let slideInterval;

// jalankan musik otomatis saat halaman dibuka
window.onload = function() {
  let song = document.getElementById("birthdaySong");
  if (song) {
    song.play().catch(() => {
      // beberapa browser butuh interaksi klik dulu
      console.log("Autoplay dicegah, musik akan jalan setelah interaksi.");
    });
  }
};

function showMessage(option) {
  let message = document.getElementById("message");

  if (option === 1) {
    clearInterval(slideInterval);
    message.innerHTML = `
      🌸 Selamat ulang tahun ya sayang! Semoga hari ini dipenuhi dengan kebahagiaan dan kejutan indah.<br><br>
      Di hari spesial ini untuk abang yang sangat hebat dan selalu membawa kebahagiaan dalam hidup adek. 
      Kebaikan hati serta dukungan abang selama ini sangat berarti. Terima kasih ya sayang sudah menjadi bagian terpenting dalam hidup adek.<br><br>
      Semoga bertambah usia abang ini, semua impian tercapai, selalu dipermudah di setiap langkah, 
      dan kita bisa terus bersama dengan momen-momen indah bersama. ❤️<br><br>
      I love you more than words can express!
    `;
  } else if (option === 2) {
    clearInterval(slideInterval);
    message.innerHTML = "🙏 Semoga Allah selalu memberkahi langkahmu, memberi kesehatan, rezeki, dan kebahagiaan sepanjang hidup.";
  }
}
