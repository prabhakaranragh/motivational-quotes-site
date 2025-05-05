const quotes = [
  {
    text: "STAY CALM.\nSTAY FOCUSED.\nSTAY UNSTOPPABLE.",
    image: "image1.png"
  },
  {
    text: "HUSTLE IN SILENCE.\nLET SUCCESS MAKE THE NOISE.",
    image: "image2.png"
  },
  {
    text: "THE JOURNEY MAY BE LONG, BUT EVERY STEP COUNTS.",
    image: "image3.png"
  },
  {
    text: "EVERY SUNRISE IS A NEW OPPORTUNITY TO RISE ABOVE YESTERDAY.",
    image: "image4.png"
  },
  {
    text: "DOUBT KILLS MORE DREAMS THAN FAILURE EVER WILL.",
    image: "image5.png"
  }
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").textContent = quotes[random].text;
  document.getElementById("quote-image").src = quotes[random].image;
}

window.onload = generateQuote;
