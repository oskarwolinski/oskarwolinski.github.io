const revealItems = document.querySelectorAll("[data-reveal]");
const body = document.body;
const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const header = document.querySelector(".site-header");
const backToTopButton = document.getElementById("back-to-top");
const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
const trackedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

const translations = {
    en: {
        "header.eyebrow": "Independent Visual Studio",
        "nav.showcase": "Showcase",
        "nav.services": "Services",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",
        "hero.tag": "Creative Direction / Writing / Production",
        "hero.title": "A cinematic look for a simple draft, without losing its original soul.",
        "hero.lead": "This version keeps the original sections and structure, but upgrades them with stronger typography, layered imagery, elegant motion, and a more confident visual rhythm.",
        "hero.primary": "See the original core",
        "hero.secondary": "Browse frames",
        "hero.cardLabel": "Now showing",
        "hero.cardText": "Stories that look bigger than the budget.",
        "stats.one": "Sharper presentation for writing and concept work.",
        "stats.two": "Clearer service structure with a stronger visual center.",
        "stats.three": "The original spirit is still there, only better staged.",
        "services.tag": "Original Core",
        "services.title": "The same foundation, now framed like a studio pitch.",
        "services.leftTitle": "Services",
        "services.leftItem1": "Creative writing",
        "services.leftItem2": "Script development",
        "services.leftItem3": "Studio production",
        "pricing.title": "Pricing",
        "pricing.headService": "Service",
        "pricing.headDescription": "Description",
        "pricing.headPrice": "Price",
        "pricing.row1Service": "Writing",
        "pricing.row1Desc": "Concept notes, story beats, and voice direction.",
        "pricing.row1Price": "from 300 EUR",
        "pricing.row2Service": "Scripts",
        "pricing.row2Desc": "Short form screenwriting and polished production drafts.",
        "pricing.row2Price": "from 650 EUR",
        "pricing.row3Service": "Studio",
        "pricing.row3Desc": "Visual execution, direction, and shoot planning.",
        "pricing.row3Price": "custom quote",
        "clients.title": "Featured collaborators",
        "clients.item1": "Artemis Studio",
        "clients.item2": "Northlane Media",
        "clients.item3": "Velora Pictures",
        "clients.item4": "Luma House",
        "clients.item5": "Rivet Collective",
        "gallery.tag": "Selected Frames",
        "gallery.title": "A compact gallery that gives the page more atmosphere.",
        "contact.tag": "Start a Project",
        "contact.title": "Ready to turn a rough concept into something worth screening?",
        "contact.lead": "Bring the idea, the references, or even just the mood. Nomus Films can shape it into a tighter pitch, a stronger script, and a more cinematic visual direction.",
        "contact.primary": "hello@nomusfilms.com",
        "contact.secondary": "Back to showcase",
        "contact.card1Label": "Typical scope",
        "contact.card1Title": "Concept, script, and visual positioning.",
        "contact.card1Meta": "Ideal for pitches, teasers, and short-format film work.",
        "contact.card2Label": "Turnaround",
        "contact.card2Title": "Fast feedback, clear direction, polished delivery.",
        "contact.card2Meta": "From first draft review to a presentation-ready version.",
        "contact.card3Label": "Best fit",
        "contact.card3Title": "Brands, filmmakers, and small studios.",
        "contact.card3Meta": "Especially when the idea is strong but the framing needs elevation.",
        "footer.credit": "crafted by Oskar Wolinski",
        "controls.language": "Italiano",
        "controls.theme.night": "Switch to Night",
        "controls.theme.day": "Switch to Day",
    },
    it: {
        "header.eyebrow": "Studio Visivo Indipendente",
        "nav.showcase": "Vetrina",
        "nav.services": "Servizi",
        "nav.gallery": "Galleria",
        "nav.contact": "Contatto",
        "hero.tag": "Direzione Creativa / Scrittura / Produzione",
        "hero.title": "Un look cinematografico per una bozza semplice, senza perdere la sua anima originale.",
        "hero.lead": "Questa versione mantiene la struttura originale, ma la valorizza con una tipografia piu forte, immagini a livelli, movimento elegante e un ritmo visivo piu deciso.",
        "hero.primary": "Vedi il nucleo originale",
        "hero.secondary": "Sfoglia i frame",
        "hero.cardLabel": "In evidenza",
        "hero.cardText": "Storie che sembrano piu grandi del budget.",
        "stats.one": "Presentazione piu incisiva per scrittura e concept.",
        "stats.two": "Struttura dei servizi piu chiara con un centro visivo piu forte.",
        "stats.three": "Lo spirito originale resta, ma con una regia migliore.",
        "services.tag": "Nucleo Originale",
        "services.title": "La stessa base, ora presentata come un vero pitch di studio.",
        "services.leftTitle": "Servizi",
        "services.leftItem1": "Scrittura creativa",
        "services.leftItem2": "Sviluppo script",
        "services.leftItem3": "Produzione studio",
        "pricing.title": "Prezzi",
        "pricing.headService": "Servizio",
        "pricing.headDescription": "Descrizione",
        "pricing.headPrice": "Prezzo",
        "pricing.row1Service": "Scrittura",
        "pricing.row1Desc": "Note di concept, struttura narrativa e direzione della voce.",
        "pricing.row1Price": "da 300 EUR",
        "pricing.row2Service": "Script",
        "pricing.row2Desc": "Sceneggiature brevi e draft rifiniti per la produzione.",
        "pricing.row2Price": "da 650 EUR",
        "pricing.row3Service": "Studio",
        "pricing.row3Desc": "Esecuzione visiva, direzione e pianificazione delle riprese.",
        "pricing.row3Price": "preventivo personalizzato",
        "clients.title": "Collaboratori in evidenza",
        "clients.item1": "Artemis Studio",
        "clients.item2": "Northlane Media",
        "clients.item3": "Velora Pictures",
        "clients.item4": "Luma House",
        "clients.item5": "Rivet Collective",
        "gallery.tag": "Frame Selezionati",
        "gallery.title": "Una galleria compatta che aggiunge piu atmosfera alla pagina.",
        "contact.tag": "Avvia un Progetto",
        "contact.title": "Pronto a trasformare un'idea grezza in qualcosa che meriti lo schermo?",
        "contact.lead": "Porta l'idea, i riferimenti o anche solo l'atmosfera. Nomus Films puo trasformarla in un pitch piu forte, uno script piu solido e una direzione visiva piu cinematografica.",
        "contact.primary": "hello@nomusfilms.com",
        "contact.secondary": "Torna alla vetrina",
        "contact.card1Label": "Ambito tipico",
        "contact.card1Title": "Concept, script e posizionamento visivo.",
        "contact.card1Meta": "Ideale per pitch, teaser e lavori filmici di breve formato.",
        "contact.card2Label": "Tempistiche",
        "contact.card2Title": "Feedback rapido, direzione chiara, consegna rifinita.",
        "contact.card2Meta": "Dalla prima revisione a una versione pronta da presentare.",
        "contact.card3Label": "Perfetto per",
        "contact.card3Title": "Brand, filmmaker e piccoli studi.",
        "contact.card3Meta": "Soprattutto quando l'idea e forte ma la presentazione ha bisogno di salire di livello.",
        "footer.credit": "realizzato da Oskar Wolinski",
        "controls.language": "English",
        "controls.theme.night": "Passa alla Notte",
        "controls.theme.day": "Passa al Giorno",
    },
};

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
    }
);

revealItems.forEach((item, index) => {
    if (!item.style.getPropertyValue("--reveal-delay")) {
        item.style.setProperty("--reveal-delay", `${Math.min(index * 0.04, 0.24)}s`);
    }

    revealObserver.observe(item);
});

function updateScrollUi() {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
    const sectionMarker = scrollTop + header.offsetHeight + 120;

    document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    header.classList.toggle("is-scrolled", scrollTop > 24);
    backToTopButton.classList.toggle("is-visible", scrollTop > 520);

    let activeSectionId = trackedSections[0]?.id || "";

    trackedSections.forEach((section) => {
        if (section.offsetTop <= sectionMarker) {
            activeSectionId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeSectionId}`;
        link.classList.toggle("is-active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

function applyLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";
    const dictionary = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage;
    body.dataset.language = selectedLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    langToggle.textContent = dictionary["controls.language"];
    themeToggle.textContent =
        body.dataset.theme === "night"
            ? dictionary["controls.theme.day"]
            : dictionary["controls.theme.night"];

    localStorage.setItem("nomus-language", selectedLanguage);
}

function applyTheme(theme) {
    const selectedTheme = theme === "day" ? "day" : "night";
    body.dataset.theme = selectedTheme;

    const language = body.dataset.language || "en";
    const dictionary = translations[language];

    themeToggle.textContent =
        selectedTheme === "night"
            ? dictionary["controls.theme.day"]
            : dictionary["controls.theme.night"];

    localStorage.setItem("nomus-theme", selectedTheme);
}

langToggle.addEventListener("click", () => {
    const nextLanguage = body.dataset.language === "en" ? "it" : "en";
    applyLanguage(nextLanguage);
});

themeToggle.addEventListener("click", () => {
    const nextTheme = body.dataset.theme === "night" ? "day" : "night";
    applyTheme(nextTheme);
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

const savedTheme = localStorage.getItem("nomus-theme");
const savedLanguage = localStorage.getItem("nomus-language");

let scrollUiScheduled = false;

function requestScrollUiUpdate() {
    if (scrollUiScheduled) {
        return;
    }

    scrollUiScheduled = true;

    requestAnimationFrame(() => {
        updateScrollUi();
        scrollUiScheduled = false;
    });
}

window.addEventListener(
    "scroll",
    () => {
        requestScrollUiUpdate();
    },
    { passive: true }
);

window.addEventListener("resize", requestScrollUiUpdate);

window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
    requestScrollUiUpdate();
});

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
    requestScrollUiUpdate();
});

applyTheme(savedTheme || "night");
applyLanguage(savedLanguage || "en");
updateScrollUi();
