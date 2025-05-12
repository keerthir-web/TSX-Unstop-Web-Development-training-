document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const projects = [
        {
            title: "E-commerce Website",
            description: "A fully responsive online store with shopping cart functionality.",
            image: "images/project1.jpg",
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
        },
        {
            title: "Task Management App",
            description: "A productivity application for organizing daily tasks.",
            image: "images/project2.jpg",
            tags: ["JavaScript", "React", "Firebase"]
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website to showcase my work.",
            image: "images/project3.jpg",
            tags: ["HTML", "CSS", "Bootstrap"]
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-4';
        projectCard.innerHTML = `
            <div class="card project-card h-100">
                <img src="${project.image}" class="card-img-top project-img" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
                <div class="card-footer">
                    ${project.tags.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log({ name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});