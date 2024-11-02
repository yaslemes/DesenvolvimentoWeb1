document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobileMenu");
    const hamburguerButton = document.getElementById("hamburguerButton");
    const closeButton = document.getElementById("closeButton");

    // Mostrar o menu móvel ao clicar no botão de hambúrguer
    hamburguerButton.addEventListener("click", () => {
        mobileMenu.classList.add("show");
    });

    // Fechar o menu móvel ao clicar no botão de fechar (X)
    closeButton.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
    });
});