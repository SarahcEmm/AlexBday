function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flip');
    
    // Trigger confetti when card flips to the back
    if (card.classList.contains('flip')) {
        launchConfetti();
    }
}

function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.5 }
    });
}