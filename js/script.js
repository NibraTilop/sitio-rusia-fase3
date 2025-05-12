
document.addEventListener("DOMContentLoaded", function () {
    const mensaje = document.getElementById("mensaje-bienvenida");
    const hora = new Date().getHours();
    let saludo = "";

    if (hora < 12) {
        saludo = "¡Buenos días! Bienvenido a la página sobre Rusia.";
    } else if (hora < 18) {
        saludo = "¡Buenas tardes! Explora lo mejor de Rusia.";
    } else {
        saludo = "¡Buenas noches! Gracias por visitarnos.";
    }

    if (mensaje) mensaje.innerText = saludo;

    
    const menuItems = document.querySelectorAll(".menu li a");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
        });
        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });

    
    const sliderImages = [
        "images/galeria1.webp",
        "images/galeria2.webp",
        "images/galeria3.webp"
    ];
    let currentIndex = 0;
    const slider = document.getElementById("slider");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    function showImage(index) {
        if (slider) {
            slider.src = sliderImages[index];
        }
    }

    if (nextBtn && prevBtn && slider) {
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % sliderImages.length;
            showImage(currentIndex);
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
            showImage(currentIndex);
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % sliderImages.length;
            showImage(currentIndex);
        }, 5000);

        showImage(currentIndex);
    }
});
