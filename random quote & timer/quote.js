const quotes = [
  { text: "In three words I can sum up everything I've learned about life: it goes on." },
  { text: "You only live once, but if you do it right, once is enough." },
  { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams" },
  { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." },
  { text: "A room without books is like a body without a soul." },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." },
  { text: "So many books, so little time." }
];

const newBtn = document.getElementById("newQuote")

function showRandomQuote() {
  let q = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `${q.text}`
}
newBtn.addEventListener("click", showRandomQuote)

const likeBtn = document.getElementById("likeBtn");

// heart color will change
likeBtn.style.color = "white";

likeBtn.addEventListener("click", function () {
  if (likeBtn.style.color === "red") {
    likeBtn.style.color = "white"; // back to white
  } else {
    likeBtn.style.color = "red"; // turn red
  }
});

// bird fly
// Birds flying
const tweetBtn = document.getElementById("tweetBtn");
const card = document.getElementById("quoteCard");

tweetBtn.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) { // 6 birds
    let bird = document.createElement("img");
    bird.src = "https://pngimg.com/uploads/birds/small/birds_PNG32.png";
    bird.className = "flying-bird";
    
    // random position in card
    bird.style.left = Math.random() * card.clientWidth + "px";
    bird.style.top = Math.random() * card.clientHeight + "px";
    
    card.appendChild(bird);
    setTimeout(() => bird.remove(), 2500);
  }
});


showRandomQuote()