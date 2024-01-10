const userName = document.querySelector("#userName");
const password = document.querySelector("#password");

let btn = document.querySelector("#login-btn");
let tryBtn = document.querySelector("#try-btn");
let quitBtn = document.querySelector("#quit-btn");
let btnBox = document.querySelector(".btn-container");

btn.addEventListener("click", () => {
    if (userName.value === "ABCD" && password.value === "1234") {
        btn.style.backgroundColor = "green";
        alert("You Logged in sucessfully!🥳");
        location.reload();
    }
    else {
        btnBox.classList.add("active");
        btn.classList.remove("#login-btn");
        // btn.style.backgroundColor = "red";
        // btn.innerHTML = "TRY AGAIN";
    }
});
tryBtn.addEventListener("click", () => {
    location.reload();
});