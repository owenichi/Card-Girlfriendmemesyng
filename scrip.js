document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "",
        "Hallo Sayang",
        "Hehehehe",
        "Selamat datang di",
        "Kartu Ulang Tahun",
        "yang di buat oleh",
        "Ichi",
        "Ini Saya",
        "Ichi 😎😎😎",
        "Hari ini tanggal",
        "24 april 2025",
        "Saya ingin mengucapkan",
        "Selamat Ulang Tahun ke 17th",
        "Untukmu Sayangku",
        "Semoga di umurmu yang ke 17th ini",
        "Kamu semakin tidak degil",
        "Gampang di atur",
        "dan",
        "Semakin sayang sama saya",
        "Berubah ya sayangku",
        "Jangan nakal-nakal lagi",
        "Dan panjnag umur ya sayangku",
        "Semoga kita bisa bersama",
        "Sampai tua",
        "Aminnnnnnnnnnnnnnnn",
        "Selamat Ulang Tahun Sayangku",
        "I LOVE YOU MORE",
        "Sayanggggg",
        "HEHHEHHE",
        "Maaf itu aja",
        "yang bisa chi sampaikan",
        "Semoga kamu suka",
        "Hehehee",

        "",
        " ",
        " ",
        " ",
        "",
        " ",
        " ",
        " ",
        " ",
        "",
        " ",
        " ",
        " ",
        " ",
        " ",
        "",
    "",];

   

    const delay = 90; // adjust the speed here
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                const charElement = document.createElement("span"); 
                charElement.textContent = char;
                charElement.style.animation = "glow 2s ease-in-out"; 
                lyricsElement.appendChild(charElement); 

                await new Promise((resolve) => setTimeout(resolve, delay));

                
                charElement.style.animation = "";
            }

            lyricsElement.appendChild(document.createElement("br")); 

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.textContent = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }

        setTimeout(function () {
            window.location.href = "yournexthtmlfile.html"; //set here your next target html
        }, 700);
    }
    
    displayLyrics();
});