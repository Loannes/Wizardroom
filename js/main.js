// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// Contact Form - Open Default Email Client
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Construct email content
        const subject = `[WizardRoom 문의] ${name}님으로부터의 메시지`;
        const body = `${message}`;

        // Open default email client
        window.location.href = `mailto:wizardroom@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}
