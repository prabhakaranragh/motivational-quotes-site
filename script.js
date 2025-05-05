const quotes = [
  { image: "image1.png" },
  { image: "image2.png" },
  { image: "image3.png" },
  { image: "image4.png" },
  { image: "image5.png" }
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const img = document.getElementById("quote-image");

  img.classList.remove("loaded");
  img.onload = () => img.classList.add("loaded");
  img.src = quotes[random].image;
}

window.onload = generateQuote;
