const teamMembers = [
    { name: "HTML", role: "Structure", sectionId: "html-section" },
    { name: "CSS", role: "Styling", sectionId: "css-section" },
    { name: "JAVA SCRIPT", role: "Interactive", sectionId: "js-section" },
    { name: "PYTHON", role: "Versatile", sectionId: "python-section" },
    { name: "C", role: "Procedural", sectionId: "c-section" },
    { name: "C++", role: "Versatile", sectionId: "cpp-section" }
];

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex, shouldScroll = false) {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (newIndex + cards.length) % cards.length;

    cards.forEach((card, i) => {
        const offset = (i - currentIndex + cards.length) % cards.length;

        card.classList.remove(
            "center", "left-1", "left-2", "right-1", "right-2", "hidden"
        );

        if (offset === 0) { card.classList.add("center"); }
        else if (offset === 1) { card.classList.add("right-1"); }
        else if (offset === 2) { card.classList.add("right-2"); }
        else if (offset === cards.length - 1) { card.classList.add("left-1"); }
        else if (offset === cards.length - 2) { card.classList.add("left-2"); }
        else { card.classList.add("hidden"); }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });

    memberName.style.opacity = "0";
    memberRole.style.opacity = "0";

    setTimeout(() => {
        memberName.textContent = teamMembers[currentIndex].name;
        memberRole.textContent = teamMembers[currentIndex].role;
        memberName.style.opacity = "1";
        memberRole.style.opacity = "1";

        if (shouldScroll) {
            const section = document.getElementById(teamMembers[currentIndex].sectionId);
            if (section) {
                const stickyNav = document.getElementById('hi');
                const navHeight = stickyNav ? stickyNav.clientHeight : 0;
                const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight - 20; // 20px buffer
                window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            }
        }
    }, 300);

    setTimeout(() => {
        isAnimating = false;
    }, 800);
}

leftArrow.addEventListener("click", () => updateCarousel(currentIndex - 1));
rightArrow.addEventListener("click", () => updateCarousel(currentIndex + 1));
dots.forEach((dot, i) => dot.addEventListener("click", () => updateCarousel(i)));
cards.forEach((card, i) => card.addEventListener("click", () => updateCarousel(i, true))); // true means scroll

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { updateCarousel(currentIndex - 1); }
    else if (e.key === "ArrowRight") { updateCarousel(currentIndex + 1); }
});

let touchStartX = 0;
let touchEndX = 0;
document.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; });
document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) { updateCarousel(currentIndex + 1); }
        else { updateCarousel(currentIndex - 1); }
    }
}

updateCarousel(0);

// === Footer me booble ===
function generateFooterBubbles() {
    const bubblesContainer = document.querySelector('.footer .bubbles');
    if (!bubblesContainer) return;
    
    const bubbleCount = 128;
    let bubblesHTML = '';
    for (let i = 0; i < bubbleCount; i++) {
        const size = 2 + Math.random() * 4;
        const distance = 6 + Math.random() * 4;
        const position = -5 + Math.random() * 110;
        const time = 2 + Math.random() * 2;
        const delay = -1 * (2 + Math.random() * 2);
        bubblesHTML += `<div class="bubble" style="--size:${size}rem; --distance:${distance}rem; --position:${position}%; --time:${time}s; --delay:${delay}s;"></div>`;
    }
    bubblesContainer.innerHTML = bubblesHTML;
}

document.addEventListener('DOMContentLoaded', generateFooterBubbles);

/* --- Explosive Text Effect Script --- */
document.addEventListener('DOMContentLoaded', () => {
  const explosiveLinks = document.querySelectorAll('.explosive-text');

  explosiveLinks.forEach(link => {
    const letters = link.textContent.split('');
    link.textContent = ''; // Clear original text

    letters.forEach(letter => {
      const span = document.createElement('span');
      span.textContent = letter;
      // Add a non-breaking space if the original character was a space
      if (letter === ' ') {
        span.innerHTML = '&nbsp;';
      }
      link.appendChild(span);
    });

    link.addEventListener('mouseenter', () => {
      link.classList.add('explode');
      const spans = link.querySelectorAll('span');
      spans.forEach(span => {
        // Random values for the explosion effect
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        const rot = (Math.random() - 0.5) * 360;
        
        span.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
      });
    });

    link.addEventListener('mouseleave', () => {
      link.classList.remove('explode');
      const spans = link.querySelectorAll('span');
      spans.forEach(span => {
        span.style.transform = 'translate(0, 0) rotate(0deg)';
      });
    });
  });
});
