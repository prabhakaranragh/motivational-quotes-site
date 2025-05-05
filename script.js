const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    image: "https://source.unsplash.com/800x400/?motivation,success"
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    image: "https://source.unsplash.com/800x400/?nature,hope"
  },
  {
    text: "It’s not whether you get knocked down, it’s whether you get up.",
    image: "https://source.unsplash.com/800x400/?inspiration,life"
  },
  {
    text: "Success doesn’t come to you. You go to it.",
    image: "https://source.unsplash.com/800x400/?success,sky"
  }
];
function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").textContent = quotes[random].text;
  document.getElementById("quote-image").src = quotes[random].image + "?t=" + new Date().getTime();
}
window.onload = generateQuote;
