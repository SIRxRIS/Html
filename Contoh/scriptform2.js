document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const result = document.getElementById("result");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;

        result.innerHTML = Terima kasih, ${nama}! Anda telah mendaftar dengan email ${email}.;
    });
});