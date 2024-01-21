const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

// Eventos
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.Value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innertext = "Código criado!";
        
    });
}


qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQrCode();
    }
});

// Limpar o Qr Code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.Value) {
        container.classList.remove("active");
        qrCodeBtn.innertext = "Gerar QR Code";
    }
})