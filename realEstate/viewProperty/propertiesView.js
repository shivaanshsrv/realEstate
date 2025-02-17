function filterProperties(type) {
    const cards = document.querySelectorAll('.property-card');
    cards.forEach(card => {
        if (type === 'all' || card.getAttribute('data-type') === type) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Update active state of buttons
    const buttons = document.querySelectorAll('.filter-bar button');
    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === type) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
