// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Tab switching
function switchTab(tabName) {
    // Remove active class from all tabs
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    tabTriggers.forEach(trigger => {
        trigger.classList.remove('active');
    });

    // Remove active class from all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to clicked tab
    const clickedTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (clickedTab) {
        clickedTab.classList.add('active');
    }

    // Add active class to corresponding content
    const tabContent = document.getElementById(`${tabName}-content`);
    if (tabContent) {
        tabContent.classList.add('active');
    }
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const currentYearElement = document.getElementById('current-year');

    // Set current year in footer
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Handle form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show toast notification
            showToast('Mensagem enviada com sucesso! Entrarei em contato em breve.');

            // Reset form
            contactForm.reset();
        });
    }

    // Toast notification function
    function showToast(message) {
        const toastMessage = document.getElementById('toast-message');
        if (toastMessage) {
            toastMessage.textContent = message;
        }

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Intersection Observer for animations (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards for fade-in animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Handle scroll for header background (if you want to add a header later)
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // You can add header show/hide logic here if needed
    
    lastScroll = currentScroll;
});
