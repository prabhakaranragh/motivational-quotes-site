const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80"
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    text: "It’s not whether you get knocked down, it’s whether you get up.",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80"
  },
  {
    text: "Success doesn’t come to you. You go to it.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
  }
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").textContent = quotes[random].text;
  document.getElementById("quote-image").src = quotes[random].image;
}

window.onload = generateQuote;
