const quotes = [
  {
    
    image: "image1.png"
  },
  {
    
    image: "image2.png"
  },
  {
    
    image: "image3.png"
  },
  {
    
    image: "image4.png"
  },
  {
    
    image: "image5.png"
  }
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").textContent = quotes[random].text;
  document.getElementById("quote-image").src = quotes[random].image;
}

window.onload = generateQuote;
