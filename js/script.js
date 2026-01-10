document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Advanced Class Filtering with Animation
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.class-detail-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // 3. Plan Selection
    const planBtns = document.querySelectorAll('.select-plan');
    planBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const planName = this.getAttribute('data-plan');
            this.innerHTML = '<i class="fas fa-check"></i> SELECTED';
            this.style.background = '#4CAF50';
            alert(`Ready to join Apex? You've chosen the ${planName} plan!`);
        });
    });
});