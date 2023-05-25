document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("hitungbuttonluas");
    button.addEventListener("click", hitungLuas);
});

function hitungLuas() {
    var sisi = parseFloat(document.getElementById("sisi").value);
    var luas = sisi * sisi;

    var rumus = "Luas = sisi x sisi";
    var hitung = "nilai sisi yang anda input = " + sisi;
    var hasil = "Luas Persegi = " + luas;

    document.getElementById("output-luas").innerHTML = rumus + "<br>" + hitung + "<br>" + hasil;


}

function tombolreset1() {

    document.getElementById("resetluas").reset();
}


//keliling//

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("hitungbuttonkeliling");
    button.addEventListener("click", hitungkeliling);
});

function hitungkeliling() {
    var sisi = parseFloat(document.getElementById("sisi2").value);
    var keliling = 4 * sisi;

    var rumus = "keliling = 4 x sisi";
    var hitung = "nilai sisi yang anda input = " + sisi;
    var hasil = "Keliling Persegi = " + keliling;

    document.getElementById("output-keliling").innerHTML = rumus + "<br>" + hitung + "<br>" + hasil;


}

function tombolreset2() {

    document.getElementById("resetkeliling").reset();
}