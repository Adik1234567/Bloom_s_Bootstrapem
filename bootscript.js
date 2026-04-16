document.addEventListener("DOMContentLoaded", () => {
    const flowers = [
        { name: "Blush Bloom", image: "pics/flower_1.png", alt: "Blush Bloom bouquet", link: "#" },
        { name: "Dune Beige", image: "pics/flower_2.png", alt: "Dune Beige bouquet", link: "#" },
        { name: "Pretty Roses", image: "pics/flower_3.png", alt: "Pretty Roses bouquet", link: "#" },
        { name: "Wild Whisper", image: "pics/flower_4.png", alt: "Wild Whisper bouquet", link: "#" }
    ];

    const previousButton = document.getElementById("flowers-prev");
    const nextButton = document.getElementById("flowers-next");
    const sliderTrack = document.getElementById("flowers-track");

    if (!previousButton || !nextButton || !sliderTrack) {
        return;
    }

    const imageElements = Array.from(document.querySelectorAll("[data-flower-image]"));
    const titleElements = Array.from(document.querySelectorAll("[data-flower-title]"));
    const linkElements = Array.from(document.querySelectorAll("[data-flower-link]"));
    const visibleCount = imageElements.length;

    if (!visibleCount) {
        return;
    }

    let startIndex = 0;
    let isAnimating = false;

    const renderFlowers = () => {
        for (let slotIndex = 0; slotIndex < visibleCount; slotIndex += 1) {
            const flower = flowers[(startIndex + slotIndex) % flowers.length];
            const imageElement = imageElements[slotIndex];
            const titleElement = titleElements[slotIndex];
            const linkElement = linkElements[slotIndex];

            imageElement.src = flower.image;
            imageElement.alt = flower.alt;
            titleElement.textContent = flower.name;
            linkElement.href = flower.link;
        }
    };

    const changeFlowers = (direction) => {
        if (isAnimating) {
            return;
        }

        isAnimating = true;
        sliderTrack.classList.add("is-changing");

        window.setTimeout(() => {
            startIndex = (startIndex + direction + flowers.length) % flowers.length;
            renderFlowers();
            sliderTrack.classList.remove("is-changing");

            window.setTimeout(() => {
                isAnimating = false;
            }, 280);
        }, 140);
    };

    previousButton.addEventListener("click", () => {
        changeFlowers(-1);
    });

    nextButton.addEventListener("click", () => {
        changeFlowers(1);
    });

    renderFlowers();
});