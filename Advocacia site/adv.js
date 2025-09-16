// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = 64 // Height of fixed header
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }

    // Close mobile menu if open
    mobileMenu.classList.add("hidden")
  })
})

// Testimonials Carousel
let currentTestimonial = 0
const testimonialTrack = document.getElementById("testimonial-track")
const testimonials = document.querySelectorAll(".testimonial-card")
const totalTestimonials = testimonials.length

function showTestimonial(index) {
  const translateX = -index * (100 / totalTestimonials)
  testimonialTrack.style.transform = `translateX(${translateX}%)`
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials
  showTestimonial(currentTestimonial)
}

// Auto-rotate testimonials every 5 seconds
setInterval(nextTestimonial, 5000)

// Contact Form Handling
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Simple validation
  if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
    alert("Por favor, preencha todos os campos obrigatórios.")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    alert("Por favor, insira um e-mail válido.")
    return
  }

  // Phone validation (basic)
  const phoneRegex = /^[\d\s\-$$$$]+$/
  if (!phoneRegex.test(data.phone)) {
    alert("Por favor, insira um telefone válido.")
    return
  }

  // Simulate form submission
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  contactForm.reset()

  // In a real application, you would send this data to your server
  console.log("Form data:", data)
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.classList.add("bg-white/95", "backdrop-blur-sm")
  } else {
    header.classList.remove("bg-white/95", "backdrop-blur-sm")
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in")
    }
  })
}, observerOptions)

// Observe service cards and other elements
document.querySelectorAll(".service-card, .stat-card, .testimonial-card").forEach((el) => {
  observer.observe(el)
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroSection = document.querySelector(".hero-section")
  if (heroSection) {
    heroSection.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})
