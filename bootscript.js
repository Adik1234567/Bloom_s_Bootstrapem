document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            "nav.menu": "≡ Menu",
            "nav.shop": "Shop",
            "nav.bouquet": "Bouquet",
            "nav.giftBasket": "Gift Basket",
            "nav.about": "About Us",
            "nav.contact": "Contact",
            "nav.customOrder": "Custom Order",
            "hero.viewDemo": "View Demo",
            "hero.hibiscus": "Hibiscus",
            "hero.titlePrefix": "Curated Florals that ",
            "hero.titleSuffix": " Speak to the Soul",
            "hero.subtitle": "Each flower to evoke feelings and draw hearts closer",
            "hero.orderNow": "Order Now",
            "hero.newBouquetStyle": "NEW BOUQUET STYLE",
            "hero.craftingByLoves": "Crafting by Loves",
            "stats.valentineStories": "VALENTINE STORIES",
            "stats.monthlyUsers": "Monthly Users",
            "stats.floristBouquet": "Florist & Bouquet",
            "section.handPickedTitle": "Hand-picked for your heart picked person",
            "section.handPickedText": "If you want to greet or thank anyone, Don't know their taste? - Send flowers.",
            "section.customizeBouquet": "Customize Bouquet",
            "slider.orderWithConfidence": "Order with Confidence",
            "slider.exploreAll": "Explore All",
            "flowers.blushBloom": "Blush Bloom",
            "flowers.duneBeige": "Dune Beige",
            "flowers.prettyRoses": "Pretty Roses",
            "flowers.wildWhisper": "Wild Whisper",
            "flowers.addToCart": "Add to Cart >",
            "custom.title": "Why custom hand-picked flower?",
            "custom.text": "Each bloom recalls - soft laughter, secret glances and love that lingers forever",
            "custom.personalizedBouquet": "Personalized Bouquet",
            "quote.prefix": "\"We craft ",
            "quote.emotions": "emotions",
            "quote.suffix": " for you, beautifully\"",
            "quote.author": "- Jeniffer",
            "promo.elegantBlooms": "Elegant blooms that speak to the soul",
            "promo.bouquetDelivered": "Bouquet Delivered",
            "promo.bloomsLine1": "Blooms recalls the one",
            "promo.bloomsLine2": "you love",
            "promo.orderNow": "Order Now",
            "promo.loveAtFirstBloom": "Love at First Bloom",
            "promo.craftedToWarm": "Crafted to Warm the Heart",
            "promo.flowersSpeak": "Flowers that speak to the soul",
            "gifting.prefix": "Gifting made effortless, by ",
            "gifting.brand": "Bloom",
            "gifting.subtitle": "Handcrafted bouquets to doorstep delivery",
            "gifting.customizeBouquet": "Customize Bouquet",
            "gifting.special": "Special",
            "gifting.bouquet": "Bouquet",
            "gifting.viewBouquets": "VIEW BOUQUETS",
            "gifting.text": "Bloom makes \"Every gift\" personal and seamless.",
            "footer.tagline": "Curated Florals that Speak to the Soul",
            "footer.clutch": "Clutch",
            "footer.review": "Review",
            "footer.joinOurGroup": "Join Our Group",
            "footer.addressLine1": "185 Lismore, Sydney,",
            "footer.addressLine2": "NSW, Australia",
            "footer.anyQuery": "If you have any query -",
            "footer.about": "About Us",
            "footer.careTips": "Flower Care Tips",
            "footer.easterFlowers": "Easter Flowers",
            "footer.contactUs": "Contact Us",
            "footer.terms": "Terms and Conditions",
            "footer.followSocials": "Follow us on Socials -",
            "footer.marquee": " VALENTINE / ANNIVERSARY / CHRISTMAS / VALENTINE / ANNIVERSARY / CHRISTMAS / VALENTINE / ANNIVERSARY / CHRISTMAS /"
        },
        es: {
            "nav.menu": "≡ Menú",
            "nav.shop": "Tienda",
            "nav.bouquet": "Ramo",
            "nav.giftBasket": "Cesta de regalo",
            "nav.about": "Sobre nosotros",
            "nav.contact": "Contacto",
            "nav.customOrder": "Pedido personalizado",
            "hero.viewDemo": "Ver demo",
            "hero.hibiscus": "Hibisco",
            "hero.titlePrefix": "Flores seleccionadas que ",
            "hero.titleSuffix": " hablan al alma",
            "hero.subtitle": "Cada flor evoca sentimientos y acerca los corazones",
            "hero.orderNow": "Pedir ahora",
            "hero.newBouquetStyle": "NUEVO ESTILO DE RAMO",
            "hero.craftingByLoves": "Hecho con amor",
            "stats.valentineStories": "HISTORIAS DE SAN VALENTÍN",
            "stats.monthlyUsers": "Usuarios mensuales",
            "stats.floristBouquet": "Florista y ramos",
            "section.handPickedTitle": "Elegido a mano para la persona elegida por tu corazón",
            "section.handPickedText": "Si quieres saludar o agradecer a alguien y no conoces sus gustos, envía flores.",
            "section.customizeBouquet": "Personalizar ramo",
            "slider.orderWithConfidence": "Pide con confianza",
            "slider.exploreAll": "Explorar todo",
            "flowers.blushBloom": "Flor ruborizada",
            "flowers.duneBeige": "Beige duna",
            "flowers.prettyRoses": "Rosas bonitas",
            "flowers.wildWhisper": "Susurro silvestre",
            "flowers.addToCart": "Añadir al carrito >",
            "custom.title": "¿Por qué una flor personalizada y elegida a mano?",
            "custom.text": "Cada flor recuerda risas suaves, miradas secretas y un amor que perdura para siempre",
            "custom.personalizedBouquet": "Ramo personalizado",
            "quote.prefix": "\"Creamos ",
            "quote.emotions": "emociones",
            "quote.suffix": " para ti, con belleza\"",
            "quote.author": "- Jeniffer",
            "promo.elegantBlooms": "Flores elegantes que hablan al alma",
            "promo.bouquetDelivered": "Ramos entregados",
            "promo.bloomsLine1": "Las flores recuerdan a quien",
            "promo.bloomsLine2": "amas",
            "promo.orderNow": "Pedir ahora",
            "promo.loveAtFirstBloom": "Amor al primer florecer",
            "promo.craftedToWarm": "Hecho para calentar el corazón",
            "promo.flowersSpeak": "Flores que hablan al alma",
            "gifting.prefix": "Regalar es más fácil, con ",
            "gifting.brand": "Bloom",
            "gifting.subtitle": "Ramos hechos a mano con entrega a domicilio",
            "gifting.customizeBouquet": "Personalizar ramo",
            "gifting.special": "Especial",
            "gifting.bouquet": "Ramo",
            "gifting.viewBouquets": "VER RAMOS",
            "gifting.text": "Bloom hace que \"cada regalo\" sea personal y sencillo.",
            "footer.tagline": "Flores seleccionadas que hablan al alma",
            "footer.clutch": "Clutch",
            "footer.review": "Reseña",
            "footer.joinOurGroup": "Únete a nuestro grupo",
            "footer.addressLine1": "185 Lismore, Sydney,",
            "footer.addressLine2": "NSW, Australia",
            "footer.anyQuery": "Si tienes alguna consulta -",
            "footer.about": "Sobre nosotros",
            "footer.careTips": "Consejos para cuidar flores",
            "footer.easterFlowers": "Flores de Pascua",
            "footer.contactUs": "Contáctanos",
            "footer.terms": "Términos y condiciones",
            "footer.followSocials": "Síguenos en redes -",
            "footer.marquee": " SAN VALENTÍN / ANIVERSARIO / NAVIDAD / SAN VALENTÍN / ANIVERSARIO / NAVIDAD / SAN VALENTÍN / ANIVERSARIO / NAVIDAD /"
        },
        fr: {
            "nav.menu": "≡ Menu",
            "nav.shop": "Boutique",
            "nav.bouquet": "Bouquet",
            "nav.giftBasket": "Panier cadeau",
            "nav.about": "À propos",
            "nav.contact": "Contact",
            "nav.customOrder": "Commande personnalisée",
            "hero.viewDemo": "Voir la démo",
            "hero.hibiscus": "Hibiscus",
            "hero.titlePrefix": "Des fleurs choisies avec soin qui ",
            "hero.titleSuffix": " parlent à l'âme",
            "hero.subtitle": "Chaque fleur évoque des émotions et rapproche les cœurs",
            "hero.orderNow": "Commander",
            "hero.newBouquetStyle": "NOUVEAU STYLE DE BOUQUET",
            "hero.craftingByLoves": "Créé avec amour",
            "stats.valentineStories": "HISTOIRES DE SAINT-VALENTIN",
            "stats.monthlyUsers": "Utilisateurs mensuels",
            "stats.floristBouquet": "Fleuriste et bouquets",
            "section.handPickedTitle": "Choisi à la main pour la personne choisie par votre cœur",
            "section.handPickedText": "Si vous voulez saluer ou remercier quelqu'un sans connaître ses goûts, offrez des fleurs.",
            "section.customizeBouquet": "Personnaliser le bouquet",
            "slider.orderWithConfidence": "Commandez en toute confiance",
            "slider.exploreAll": "Tout explorer",
            "flowers.blushBloom": "Floraison tendre",
            "flowers.duneBeige": "Beige dune",
            "flowers.prettyRoses": "Belles roses",
            "flowers.wildWhisper": "Murmure sauvage",
            "flowers.addToCart": "Ajouter au panier >",
            "custom.title": "Pourquoi choisir une fleur personnalisée à la main ?",
            "custom.text": "Chaque fleur rappelle des rires doux, des regards secrets et un amour qui dure toujours",
            "custom.personalizedBouquet": "Bouquet personnalisé",
            "quote.prefix": "\"Nous créons des ",
            "quote.emotions": "émotions",
            "quote.suffix": " pour vous, avec beauté\"",
            "quote.author": "- Jeniffer",
            "promo.elegantBlooms": "Des fleurs élégantes qui parlent à l'âme",
            "promo.bouquetDelivered": "Bouquets livrés",
            "promo.bloomsLine1": "Les fleurs rappellent celui ou celle",
            "promo.bloomsLine2": "que vous aimez",
            "promo.orderNow": "Commander",
            "promo.loveAtFirstBloom": "L'amour au premier bouquet",
            "promo.craftedToWarm": "Créé pour réchauffer le cœur",
            "promo.flowersSpeak": "Des fleurs qui parlent à l'âme",
            "gifting.prefix": "Offrir devient simple, avec ",
            "gifting.brand": "Bloom",
            "gifting.subtitle": "Bouquets faits main avec livraison à domicile",
            "gifting.customizeBouquet": "Personnaliser le bouquet",
            "gifting.special": "Spécial",
            "gifting.bouquet": "Bouquet",
            "gifting.viewBouquets": "VOIR LES BOUQUETS",
            "gifting.text": "Bloom rend \"chaque cadeau\" personnel et fluide.",
            "footer.tagline": "Des fleurs choisies avec soin qui parlent à l'âme",
            "footer.clutch": "Clutch",
            "footer.review": "Avis",
            "footer.joinOurGroup": "Rejoignez notre groupe",
            "footer.addressLine1": "185 Lismore, Sydney,",
            "footer.addressLine2": "NSW, Australie",
            "footer.anyQuery": "Si vous avez une question -",
            "footer.about": "À propos",
            "footer.careTips": "Conseils d'entretien des fleurs",
            "footer.easterFlowers": "Fleurs de Pâques",
            "footer.contactUs": "Contactez-nous",
            "footer.terms": "Conditions générales",
            "footer.followSocials": "Suivez-nous sur les réseaux -",
            "footer.marquee": " SAINT-VALENTIN / ANNIVERSAIRE / NOËL / SAINT-VALENTIN / ANNIVERSAIRE / NOËL / SAINT-VALENTIN / ANNIVERSAIRE / NOËL /"
        }
    };

    const flowersByLanguage = {
        en: [
            { key: "flowers.blushBloom", image: "pics/flower_1.png", alt: "Blush Bloom bouquet", link: "#" },
            { key: "flowers.duneBeige", image: "pics/flower_2.png", alt: "Dune Beige bouquet", link: "#" },
            { key: "flowers.prettyRoses", image: "pics/flower_3.png", alt: "Pretty Roses bouquet", link: "#" },
            { key: "flowers.wildWhisper", image: "pics/flower_4.png", alt: "Wild Whisper bouquet", link: "#" }
        ],
        es: [
            { key: "flowers.blushBloom", image: "pics/flower_1.png", alt: "Ramo Flor ruborizada", link: "#" },
            { key: "flowers.duneBeige", image: "pics/flower_2.png", alt: "Ramo Beige duna", link: "#" },
            { key: "flowers.prettyRoses", image: "pics/flower_3.png", alt: "Ramo Rosas bonitas", link: "#" },
            { key: "flowers.wildWhisper", image: "pics/flower_4.png", alt: "Ramo Susurro silvestre", link: "#" }
        ],
        fr: [
            { key: "flowers.blushBloom", image: "pics/flower_1.png", alt: "Bouquet Floraison tendre", link: "#" },
            { key: "flowers.duneBeige", image: "pics/flower_2.png", alt: "Bouquet Beige dune", link: "#" },
            { key: "flowers.prettyRoses", image: "pics/flower_3.png", alt: "Bouquet Belles roses", link: "#" },
            { key: "flowers.wildWhisper", image: "pics/flower_4.png", alt: "Bouquet Murmure sauvage", link: "#" }
        ]
    };

    const previousButton = document.getElementById("flowers-prev");
    const nextButton = document.getElementById("flowers-next");
    const sliderTrack = document.getElementById("flowers-track");
    const translatableElements = Array.from(document.querySelectorAll("[data-i18n]"));
    const languageLinks = Array.from(document.querySelectorAll(".language-link"));
    const rootElement = document.documentElement;
    const imageElements = Array.from(document.querySelectorAll("[data-flower-image]"));
    const titleElements = Array.from(document.querySelectorAll("[data-flower-title]"));
    const linkElements = Array.from(document.querySelectorAll("[data-flower-link]"));
    const totalFlowers = Math.max(
        flowersByLanguage.en.length,
        flowersByLanguage.es.length,
        flowersByLanguage.fr.length
    );

    let currentLanguage = localStorage.getItem("site-language") || rootElement.dataset.currentLanguage || "en";
    let startIndex = 0;
    let isAnimating = false;

    const translatePage = (language) => {
        const selectedTranslations = translations[language] || translations.en;

        translatableElements.forEach((element) => {
            const key = element.dataset.i18n;
            if (selectedTranslations[key]) {
                element.textContent = selectedTranslations[key];
            }
        });

        languageLinks.forEach((link) => {
            const isActive = link.dataset.language === language;
            link.classList.toggle("language-link-active", isActive);
            link.classList.toggle("text-white", !isActive);
        });

        rootElement.lang = language;
        rootElement.dataset.currentLanguage = language;
        localStorage.setItem("site-language", language);
    };

    const getCurrentFlowers = () => flowersByLanguage[currentLanguage] || flowersByLanguage.en;

    const renderFlowers = () => {
        const currentFlowers = getCurrentFlowers();

        if (!imageElements.length || !titleElements.length || !linkElements.length || !currentFlowers.length) {
            return;
        }

        const selectedTranslations = translations[currentLanguage] || translations.en;
        const visibleCount = Math.min(imageElements.length, titleElements.length, linkElements.length);

        for (let slotIndex = 0; slotIndex < visibleCount; slotIndex += 1) {
            const flower = currentFlowers[(startIndex + slotIndex) % currentFlowers.length];
            const imageElement = imageElements[slotIndex];
            const titleElement = titleElements[slotIndex];
            const linkElement = linkElements[slotIndex];

            imageElement.src = flower.image;
            imageElement.alt = flower.alt;
            titleElement.textContent = selectedTranslations[flower.key] || flower.key;
            linkElement.textContent = selectedTranslations["flowers.addToCart"] || "Add to Cart >";
            linkElement.href = flower.link;
        }
    };

    const setLanguage = (language) => {
        if (!translations[language]) {
            return;
        }

        currentLanguage = language;
        translatePage(language);
        renderFlowers();
    };

    const changeFlowers = (direction) => {
        const currentFlowers = getCurrentFlowers();
        const visibleCount = Math.min(imageElements.length, titleElements.length, linkElements.length);

        if (isAnimating || !sliderTrack || !visibleCount || !currentFlowers.length) {
            return;
        }

        isAnimating = true;
        sliderTrack.classList.add("is-changing");

        window.setTimeout(() => {
            startIndex = (startIndex + direction + currentFlowers.length) % currentFlowers.length;
            renderFlowers();
            sliderTrack.classList.remove("is-changing");

            window.setTimeout(() => {
                isAnimating = false;
            }, 280);
        }, 140);
    };

    languageLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            setLanguage(link.dataset.language);
        });
    });

    if (previousButton) {
        previousButton.type = "button";
        previousButton.addEventListener("click", (event) => {
            event.preventDefault();
            changeFlowers(-1);
        });
    }

    if (nextButton) {
        nextButton.type = "button";
        nextButton.addEventListener("click", (event) => {
            event.preventDefault();
            changeFlowers(1);
        });
    }

    if (!translations[currentLanguage]) {
        currentLanguage = "en";
    }

    renderFlowers();
    translatePage(currentLanguage);
    setLanguage(currentLanguage);
});