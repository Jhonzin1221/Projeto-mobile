function toggleMenu() {
    document.querySelector('.menu-icon').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.blur-background').classList.toggle('active');
}

function markAsRead(card) {
    card.classList.add('read');
    card.querySelector('p').style.display = 'none';  // Esconde o parágrafo
}

document.querySelectorAll('.news-card img').forEach(img => {
    img.addEventListener('click', function(event) {
        const card = this.closest('.news-card');
        markAsRead(card);
    });
});