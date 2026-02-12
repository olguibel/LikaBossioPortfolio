// Project details page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

//     Client info:
// Centennial College
// Year 2025
// Hero posters and Social media Campaign

    // Project data (you can expand this with more details)
    const projects = {
        '1': {
            title: 'Popstar for a day by Guess',
            description: 'A Y2K-inspired campaign that lets customers channel the glamour and confidence of early-2000s pop icons. This was a collaboration project with the photography department at Centennial College.',
            client: 'Centennial College',
            year: '2025',
            category: 'Hero posters and Social media Campaign',
            tools: 'Procreate and Photoshop',
            images: [
                { image: '../assets/project-1/Poster_1.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_WIP.png'},
                { image: '../assets/project-1/Poster_2.png', hoverImage: '../assets/project-1/poster2_WIP.jpg' },
                { image: '../assets/project-1/Poster3.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_2_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_1.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_1_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_2.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_2_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_4.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_4_WIP.png' },
            ],
            tooltipText: '(WORK IN PROGRESS) Composed from photos by @khadeja and @elif, coloured in Procreate, and refined in Photoshop.',
        },
        '2': {
            title: 'Social Media Campaign - Eco Fashion',
            description: 'A complete social media campaign for an eco-friendly fashion brand. The project included content creation, visual storytelling, and engagement strategies across multiple platforms.',
            client: 'Green Threads Co.',
            year: '2023',
            category: 'Digital Marketing & Design',
            tools: 'Adobe Photoshop, Illustrator, Premiere Pro',
            images: [
                { image: '../assets/project-1/Poster_1.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_WIP.png'},
                { image: '../assets/project-1/Poster_2.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_WIP.png' },
                { image: '../assets/project-1/Poster3.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_2_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_1.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_1_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_2.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_2_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_4.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_4_WIP.png' },
            ],
            tooltipText: '(WORK IN PROGRESS)Composed from photos by @khadeja and @elif, coloured in Procreate, and refined in Photoshop.',
        },
        '3': {
            title: 'Editorial Illustration - Magazine',
            description: 'A series of custom illustrations for a lifestyle magazine covering various topics including culture, travel, and personal development. Each illustration tells a unique story while maintaining a cohesive visual style.',
            client: 'Vida Magazine',
            year: '2023',
            category: 'Illustration & Editorial',
            tools: 'Procreate, Adobe Illustrator, Photoshop',
            images: [
                { image: '../assets/project-1/Poster_1.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_WIP.png'},
                { image: '../assets/project-1/Poster_2.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_WIP.png' },
                { image: '../assets/project-1/Poster3.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_2_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_1.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_1_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_2.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_2_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_4.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_4_WIP.png' },
            ],
            tooltipText: '(WORK IN PROGRESS)Composed from photos by @khadeja and @elif, coloured in Procreate, and refined in Photoshop.',
        },
        '4': {
            title: 'Advertising Campaign - Tech Startup',
            description: 'An innovative advertising campaign for a tech startup, including print ads, digital banners, and promotional materials. The campaign focused on highlighting the company\'s innovative approach and user-friendly solutions.',
            client: 'TechFlow Solutions',
            year: '2024',
            category: 'Advertising & Campaign Design',
            tools: 'Adobe Creative Suite, Figma',
            images: [
                { image: '../assets/project-1/Poster_1.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_WIP.png'},
                { image: '../assets/project-1/Poster_2.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_WIP.png' },
                { image: '../assets/project-1/Poster3.png', hoverImage: '../assets/project-1/Guess_Pop_star_for_a_day_rough_2_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_1.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_1_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_2.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_2_WIP.png' },
                { image: '../assets/project-1/SOCIAL_MEDIA_POST_4.png', hoverImage: '../assets/project-1/SOCIAL_MEDIA_POST_4_WIP.png' },
            ],
            tooltipText: '(WORK IN PROGRESS)Composed from photos by @khadeja and @elif, coloured in Procreate, and refined in Photoshop.',
        }
    };

    // Update page content based on project ID
    if (projectId && projects[projectId]) {
        const project = projects[projectId];

        document.getElementById('projectTitle').textContent = project.title;
        document.getElementById('projectDescription').textContent = project.description;
        document.getElementById('projectClient').textContent = project.client;
        document.getElementById('projectYear').textContent = project.year;
        document.getElementById('projectCategory').textContent = project.category;
        document.getElementById('projectTools').textContent = project.tools;

        // Dynamically generate gallery items from images array
        const galleryContainer = document.querySelector('.project-gallery');
        if (project.images && project.images.length > 0) {
            galleryContainer.innerHTML = ''; // Clear existing gallery items

            project.images.forEach((imageObj, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';

                // Create the main image
                const img = document.createElement('img');
                img.src = imageObj.image;
                img.alt = `${project.title} - Image ${index + 1}`;
                img.className = 'main-image';

                galleryItem.appendChild(img);

                // Add hover image if it exists
                if (imageObj.hoverImage) {
                    const hoverImg = document.createElement('img');
                    hoverImg.src = imageObj.hoverImage;
                    hoverImg.alt = `${project.title} - Image ${index + 1} (hover)`;
                    hoverImg.className = 'hover-image';

                    galleryItem.appendChild(hoverImg);

                    // Add hover event listeners to toggle visibility
                    galleryItem.addEventListener('mouseenter', function() {
                        img.style.display = 'none';
                        hoverImg.style.display = 'block';
                    });

                    galleryItem.addEventListener('mouseleave', function() {
                        img.style.display = 'block';
                        hoverImg.style.display = 'none';
                    });
                }

                galleryContainer.appendChild(galleryItem);
            });

            // Initialize tippy.js tooltips after gallery items are created
            if (project.tooltipText && typeof tippy !== 'undefined') {
                tippy('.gallery-item', {
                    content: project.tooltipText,
                    placement: 'top',
                    animation: 'fade',
                    arrow: true,
                    maxWidth: 250,
                });
            }
        }

        // Update page title
        document.title = `${project.title} - Olga`;

        // Gallery lightbox effect (simple version) - run after gallery is populated
        const galleryItems = document.querySelectorAll('.gallery-item img');
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                // You can add a lightbox modal here if needed
                this.style.cursor = 'pointer';
            });
        });
    } else {
        // Default project if no ID or invalid ID
        document.getElementById('projectTitle').textContent = 'Featured Project';
        document.getElementById('projectDescription').textContent = 'This is a showcase of creative work demonstrating design excellence and innovative thinking.';
    }
});
