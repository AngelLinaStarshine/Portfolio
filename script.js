

// Animation after 1 second
gsap.to(".imgmyself", {
    delay: 1,
    duration: 2,
    x: window.innerWidth - 500, 
    ease: "power2.inOut"
});

gsap.to(".content", {
    delay: 1,
    duration: 2,
    x:-700, 
    ease: "power1.inOut"
});

// Quote Animation
document.addEventListener("DOMContentLoaded", () => {
    const quote = document.querySelector(".quote");
    const container = document.querySelector(".quote-container");

    const quoteWidth = quote.offsetWidth;
    const containerWidth = container.offsetWidth;

    gsap.set(quote, { x: containerWidth });

    gsap.to(quote, {
        duration: (containerWidth + quoteWidth) / 100,
        x: -quoteWidth,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
            gsap.set(quote, { x: containerWidth });
        }
    });
});

// Typing effect
const words = ["data analyst", "web developer", "security analyst", "instructional designer"];
let wordIndex = 0;
let typingElement = document.querySelector(".typing");

function typeWord() {
    let word = words[wordIndex];
    typingElement.textContent = "";
    let letterIndex = 0;

    let typingEffect = setInterval(() => {
        if (letterIndex < word.length) {
            typingElement.textContent += word[letterIndex];
            letterIndex++;
        } else {
            clearInterval(typingEffect); 
            setTimeout(deleteWord, 1500);
        }
    }, 100);
}

function deleteWord() {
    let word = words[wordIndex];
    let letterIndex = word.length;

    let deletingEffect = setInterval(() => {
        if (letterIndex > 0) {
            typingElement.textContent = word.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            clearInterval(deletingEffect);
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWord, 500);
        }
    }, 50);
}

typeWord();

// Intersection Observer for the about paragraphs
const aboutParagraphs = document.querySelectorAll('.about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1
});

aboutParagraphs.forEach(paragraph => {
    observer.observe(paragraph);
});

// Scroll button functionality
const scrollButton = document.querySelector('.scroll-btn');

let timeout;
window.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const contentSection = document.querySelector('.content'); 
        const contentPosition = contentSection.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > contentPosition + 300) { 
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    }, 100);
});

gsap.to(".about-heading", {
    text: "About",
    duration: 4,
    repeat: -1,
    repeatDelay: 0.4,
    ease: "power1.in",
});

gsap.to(".skills-heading", {
    text: "Skills",
    duration: 5,
    repeat: -1,
    repeatDelay: 0.4,
    ease: "power1.in",
});

gsap.to(".contact-heading", {
    text: "Contact me",
    duration: 5,
    repeat: -1,
    repeatDelay: 0.4,
    ease: "power1.in",
});

