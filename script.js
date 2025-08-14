document.addEventListener('DOMContentLoaded', function() {
    // Carrossel de promoções
    const carousel = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.promo-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth + 20; // Largura + gap
    const totalSlides = slides.length;
    
    // Configurar o carrossel inicialmente
    updateCarousel();
    
    // Botões de navegação
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
    
    // Indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Atualizar o carrossel
    function updateCarousel() {
        // Atualizar a posição do carrossel
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Atualizar os indicadores
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Animação da faixa de SALE
    const saleStrip = document.querySelector('.sale-strip p');
    const saleText = saleStrip.textContent;
    saleStrip.textContent = saleText + ' ' + saleText; // Duplicar o texto para animação contínua
    
    // Funcionalidade de pesquisa
    const searchForm = document.querySelector('.search-bar');
    const searchInput = document.querySelector('.search-bar input');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm) {
            // Aqui você implementaria a lógica de pesquisa real
            alert(`Pesquisando por: ${searchTerm}`);
            searchInput.value = '';
        }
    });
    
    // Efeito hover nas imagens do banner
    const bannerImages = document.querySelectorAll('.banner-images img');
    
    bannerImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Responsividade do menu
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const mainNav = document.querySelector('.main-nav');
    const headerContainer = document.querySelector('.header-container');
    
    // Adicionar botão de menu apenas em telas menores
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.menu-toggle')) {
                headerContainer.insertBefore(menuToggle, mainNav);
                mainNav.style.display = 'none';
            }
        } else {
            if (document.querySelector('.menu-toggle')) {
                document.querySelector('.menu-toggle').remove();
                mainNav.style.display = 'block';
            }
        }
    }
    
    // Verificar tamanho da tela inicialmente e ao redimensionar
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Toggle do menu em dispositivos móveis
    document.addEventListener('click', function(e) {
        if (e.target.closest('.menu-toggle')) {
            mainNav.style.display = mainNav.style.display === 'none' ? 'block' : 'none';
        }
    });
});