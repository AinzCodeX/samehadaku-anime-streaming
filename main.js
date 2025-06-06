// Top 10 Anime Data
const top10Data = [
    { rating: '8.73', title: 'One Piece', image: 'https://samehadaku.now/wp-content/uploads/2020/04/E5RxYkWX0AAwdGH.png.jpg' },
    { rating: '8.15', title: 'Wind Breaker S2', image: 'https://samehadaku.now/wp-content/uploads/2025/04/bx178680-nIAhCizY46ZU.jpg' },
    { rating: '5.20', title: 'The Beginning After the End', image: 'https://samehadaku.now/wp-content/uploads/2025/04/The-Beginning-After-the-End.jpg' },
    { rating: '7.95', title: 'Fire Force Season 3', image: 'https://samehadaku.now/wp-content/uploads/2025/04/146836l.jpg' },
    { rating: '6.44', title: 'Yami Healer', image: 'https://samehadaku.now/wp-content/uploads/2025/04/147335.jpg' },
    { rating: '7.01', title: 'Kanchigai no Atelier Meister', image: 'https://samehadaku.now/wp-content/uploads/2025/03/bx183133-SSeg5j1UrMDG.png' },
    { rating: '7.2', title: 'Katainaka no Ossan, Kensei ni Naru', image: 'https://samehadaku.now/wp-content/uploads/2025/04/148148.jpg' },
    { rating: '5.96', title: 'Haite Kudasai, Takamine-san', image: 'https://samehadaku.now/wp-content/uploads/2025/04/Haite-Kudasai-Takamine-san.jpg' },
    { rating: '6.79', title: 'Teogonia', image: 'https://samehadaku.now/wp-content/uploads/2025/04/Teogonia.jpg' },
    { rating: '6.58', title: 'Ore wa Seikan Kokka', image: 'https://samehadaku.now/wp-content/uploads/2025/03/148600.jpg' }
];

// Latest Anime Data
const latestAnimeData = [
    {
        title: 'Kusuriya no Hitorigoto Season 2',
        episode: '21',
        postedBy: 'Biasa',
        releasedOn: '39 minutes yang lalu',
        image: 'https://samehadaku.now/wp-content/uploads/2025/06/The.Apothecary.Diaries.S02E21.jpg'
    },
    {
        title: 'Bye Bye Earth Season 2',
        episode: '10',
        postedBy: 'Urusai',
        releasedOn: '1 hour yang lalu',
        image: 'https://samehadaku.now/wp-content/uploads/2025/06/Bye-Bye-Earth-Season-2-Episode-10-END.jpg'
    },
    {
        title: 'Wind Breaker S2',
        episode: '10',
        postedBy: 'Azuki',
        releasedOn: '23 hours yang lalu',
        image: 'https://samehadaku.now/wp-content/uploads/2025/06/Screenshot-294.jpg'
    },
    {
        title: 'Yami Healer',
        episode: '10',
        postedBy: 'Dinda',
        releasedOn: '1 day yang lalu',
        image: 'https://samehadaku.now/wp-content/uploads/2025/06/web-2.jpg'
    },
    {
        title: 'Haite Kudasai, Takamine-san',
        episode: '10',
        postedBy: 'Urusai',
        releasedOn: '2 days yang lalu',
        image: 'https://samehadaku.now/wp-content/uploads/2025/06/Haite-Kudasai-Takamine-san-Episode-10-UC.jpg'
    },
    {
        title: 'The Beginning After the End',
        episode: '10',
        postedBy: 'Urusai',
        releasedOn: '2 days yang lalu',
        image: 'https://samehadaku.now/wp-content/uploads/2025/06/The-Beginning-After-the-End-Episode-10.jpg'
    }
];

// Function to create Top 10 anime cards
function createTop10Cards() {
    const container = document.querySelector('#top10-container');
    if (!container) return;

    container.innerHTML = top10Data.map((anime, index) => `
        <a href="#" class="group">
            <div class="bg-white rounded-lg shadow-md overflow-hidden anime-card group hover:shadow-xl transition-all duration-300">
                <div class="relative overflow-hidden">
                    <img src="${anime.image}" 
                         alt="${anime.title}" 
                         class="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                         loading="lazy">
                    <div class="absolute top-2 right-2 flex gap-2">
                        <span class="bg-black/70 text-white px-2 py-1 rounded text-sm font-bold backdrop-blur-sm">
                            ${anime.rating}
                        </span>
                        <span class="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                            TOP ${index + 1}
                        </span>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                        ${anime.title}
                    </h3>
                </div>
            </div>
        </a>
    `).join('');
}

// Function to create Latest Anime cards
function createLatestAnimeCards() {
    const container = document.querySelector('#latest-anime-container');
    if (!container) return;

    container.innerHTML = latestAnimeData.map(anime => `
        <a href="#" class="group">
            <div class="bg-white rounded-lg shadow-md overflow-hidden anime-card group hover:shadow-xl transition-all duration-300">
                <div class="relative overflow-hidden">
                    <img src="${anime.image}" 
                         alt="${anime.title}" 
                         class="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                         loading="lazy">
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <span class="text-white font-medium">Episode ${anime.episode}</span>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                        ${anime.title}
                    </h3>
                    <div class="text-sm text-gray-600 space-y-1">
                        <p class="flex items-center text-gray-500">
                            <span class="mr-2">Posted by:</span>
                            <span class="font-medium">${anime.postedBy}</span>
                        </p>
                        <p class="flex items-center text-gray-500">
                            <span class="mr-2">Released:</span>
                            <span>${anime.releasedOn}</span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
    `).join('');
}

// Image error handling
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = () => {
            img.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
        };
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('input[type="text"]');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const allAnimeCards = document.querySelectorAll('.anime-card');

        allAnimeCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.parentElement.style.display = '';
            } else {
                card.parentElement.style.display = 'none';
            }
        });
    });
}

// Load More functionality
function initializeLoadMore() {
    const loadMoreBtn = document.querySelector('button');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', () => {
        // Add loading state
        loadMoreBtn.innerHTML = `
            <span class="inline-block animate-spin mr-2">
                <i class="fas fa-spinner"></i>
            </span>
            Loading...
        `;
        
        // Simulate loading delay
        setTimeout(() => {
            loadMoreBtn.innerHTML = 'Load More Anime';
        }, 1000);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createTop10Cards();
    createLatestAnimeCards();
    handleImageErrors();
    initializeSearch();
    initializeLoadMore();
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
