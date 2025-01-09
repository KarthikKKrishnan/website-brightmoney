document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  
  const reviews = [...track.children];
  reviews.forEach(review => {
      const clone = review.cloneNode(true);
      track.appendChild(clone);
  });
});
