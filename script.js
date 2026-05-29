const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    name: "Name 1",
    role: "Profession 1",
  },
  {
    text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.",
    name: "Name 2",
    role: "Profession 2",
  },
  {
    text: "Aenean commodo ligula eget dolor. Aenean massa. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    name: "Name 3",
    role: "Profession 3",
  },
];

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dots button");
const hero = document.querySelector(".hero");
const heroKicker = document.querySelector(".hero .section-kicker");
const heroTitle = document.querySelector(".hero h1");
const heroText = document.querySelector(".hero p");
let heroIndex = 0;
const heroContent = [
  {
    kicker: "Vocational Training Institute",
    title: "Gujarat's Largest Skill Training Institute",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "student",
  },
  {
    kicker: "Welcome to VIVEC",
    title: "Get your best career & get job with VIVEC",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "campus",
  },
];

function renderHeroSlide(index) {
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });

  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });

  const content = heroContent[index];
  heroKicker.textContent = content.kicker;
  heroTitle.textContent = content.title;
  heroText.textContent = content.text;
  hero.classList.toggle("hero-campus", content.variant === "campus");
}

if (heroSlides.length && heroDots.length) {
  renderHeroSlide(heroIndex);

  heroDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      heroIndex = index;
      renderHeroSlide(heroIndex);
    });
  });

  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    renderHeroSlide(heroIndex);
  }, 3200);
}

let testimonialIndex = 0;
const testimonialText = document.querySelector("#testimonialText");
const testimonialName = document.querySelector("#testimonialName");
const testimonialRole = document.querySelector("#testimonialRole");

function renderTestimonial() {
  const active = testimonials[testimonialIndex];
  testimonialText.textContent = active.text;
  testimonialName.textContent = active.name;
  testimonialRole.textContent = active.role;
}

document.querySelectorAll("[data-testimonial]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.testimonial === "next" ? 1 : -1;
    testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
    renderTestimonial();
  });
});

const tabButtons = document.querySelectorAll(".tab-button");
const galleryItems = document.querySelectorAll(".gallery-grid img");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    galleryItems.forEach((image) => {
      const isVisible = filter === "all" || image.dataset.category === filter;
      image.classList.toggle("hidden", !isVisible);
    });
  });
});

document.querySelector(".subscribe-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
});
