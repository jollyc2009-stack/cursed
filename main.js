
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    document.querySelectorAll(".item").forEach(item => {
        const img = item.querySelector("img");
        const caption = item.querySelector("p");

        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxCaption.textContent = caption.textContent;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
// Fade in when page loads
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Fade out when clicking internal links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        const href = link.getAttribute("href");

        // Ignore external links
        if (href.startsWith("http")) return;

        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location = href;
        }, 300);
    });
});

