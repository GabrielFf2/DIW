const title = document.getElementById("title");
const button = document.getElementById("changeText");

button?.addEventListener("click", () => {
    if (title) {
        title.textContent = "Texto Cambiado!";
    }
});