const translations = {
    en: {
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    language: "Language",
    english: "English",
    germany: "German",
    a: "Hello and Welcome. this is",
    b: "My Portfolio",
    c: "You can check it.",
    d: "view my work",
    e: "Services",
    f: "Data analytics",
    g: "I have a lot of interest in IT, especially data analytics, i can do process of cleaning, transforming, modeling & visualization data to discover useful information . i can use PYTHON, SQL, EXCEL, Power BI.",
    i: "Web Development",
    k: "I have learned the Basics of html, Css & javascript, this Portfolio by me, i hope you like it. in addition learning these languages and their structures is going to help me to get and mine Data from Web.",
    l: "Video Editing",
    m: "I have experience using Adobe Premiere Pro & photoshop. You can see my video Editing in Instagram .",
    n: "Projects",
    o: "More details",
    p:"Bike Sales.",
    p1: "Laptop Products (amazon).",
    q: "IT Jobs.",
    r: "CoronaVirus.",
    s: "Contact",
    t: "Phone"



    },
    de: {
        services: "Dienstleistungen",
        projects: "Projekte",
        contact: "Kontakt",
        language: "Sprache",
        english: "Englisch",
        germany: "Deutsch",
        a: " Hallo und Wilkommen. Das ist",
        b: "Mein Portfolio",
        c:"Sie könnten es sehen.",
        d:"sehen Sie meine Arbeit an",
        e: "Dienstleistungen",
        f: "Datenanalyse",
        g: "ich habe viel Interesse an IT, besonders Datenanalyse, Ich kann Daten bereinigen, transformieren, modellieren und visualisieren, um nützliche Informationen festzustellen. ich kann PYTHON, SQL, EXCEL & Power BI benutzen.",
        i:"Webentwicklung",
        k:"Ich habe die Grundlagen von HTML, CSS & Javascript gelernt, dieses Portfolio von mir, ich hoffe es gefällt Ihnen. Außerdem wird mir das Erlernen dieser Sprachen und ihrer Strukturen helfen, Daten aus dem Internet zu erhalten und zu minen.",
        l: "Videobearbeitung",
        m: "Ich habe Erfahrung der Verwendung von Adobe Premiere Pro und Photoshop. Sie könnten meine Videobearbeitung in Instagram ansehen.",
        n: "Projekte",
        o: "Mehr Details",
        p: "Bike Sales.",
        p1: "Laptop Products (amazon).",
        q: "IT Jobs.",
        r: "CoronaVirus.",
        s: "Kontakt",
        t:"Telefon"

        }

};
const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event)=> {
    setlanguage(event.target.value);
    localStorage.setItem("lang" , event.target.value);
});
document.addEventListener("DOMContentLoaded", ()=> {
    const language = localStorage.getItem("lang");
    setlanguage(language);
});
const setlanguage = (language) => {
    const elements = document.querySelectorAll ("[data-i18n]");
    elements.forEach((element) => {
        const translationkey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationkey]

    });
};

