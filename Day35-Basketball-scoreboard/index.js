document.addEventListener("DOMContentLoaded", function () {
    let homeScore = 0;
    let guestScore = 0;
    
    const homeDisplay = document.querySelector(".home-card p");
    const guestDisplay = document.querySelector(".guest-card p");
    
    document.querySelector(".hm-btn-one").addEventListener("click", function () {
        homeScore += 1;
        homeDisplay.textContent = homeScore;
    });
    
    document.querySelector(".hm-btn-two").addEventListener("click", function () {
        homeScore += 2;
        homeDisplay.textContent = homeScore;
    });
    
    document.querySelector(".hm-btn-three").addEventListener("click", function () {
        homeScore += 3;
        homeDisplay.textContent = homeScore;
    });
    
    document.querySelector(".gst-btn-one").addEventListener("click", function () {
        guestScore += 1;
        guestDisplay.textContent = guestScore;
    });
    
    document.querySelector(".gst-btn-two").addEventListener("click", function () {
        guestScore += 2;
        guestDisplay.textContent = guestScore;
    });
    
    document.querySelector(".gst-btn-three").addEventListener("click", function () {
        guestScore += 3;
        guestDisplay.textContent = guestScore;
    });
});
