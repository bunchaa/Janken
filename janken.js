//ambil DOM img1 dan img2
const img1 = document.querySelector(".lawan");
let player = document.querySelector(".options"); //generate angka 1-6
let reload = document.querySelector(".reload")

const bulat1 = Math.ceil(Math.random() * 3);

//masukkan angka random lalu concat dgn file 
img1.src = "janken/janken" + bulat1 + ".png";

console.log(img1.src);

//tiam tombol operasi diklik muncul pada layar
player.forEach(function (value) {
    value.addEventListener("click", function (e) {
        if (player.innerHTML != "") {
            img1.push(parseInt(player.innerHTML));
            img1.push(e.target.value);
            player.innerHTML = "";
        } else {
            return false;
        }
    })
})

//menampilkan siapa yg menang
if (bulat1 = 3 && bulat2 = 1) {
    player.innerHTML = "Player 1 WINS!!";
} else if (bulat1 < bulat2) {
    player.innerHTML = "Player 2 WINS!!";
} else if (bulat1 = bulat2) {
    player.innerHTML = "SERII!!";
}