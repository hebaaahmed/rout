var generateQuote;

var quoteOutput = document.getElementById("quoteOutput");
var authorOutput = document.getElementById("authorOutput");



var quotes = [
  `   <p id="quoteOutput">"The best revenge is massive success."</p>
         <p id="authorOutput">--Frank Sinatra</p>`,
  `   <p id="quoteOutput">"Be yourself; everyone else is already taken."</p>
         <p id="authorOutput">-- Oscar Wilde</p>`,
  `   <p id="quoteOutput">"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."</p>
         <p id="authorOutput">-- Marilyn Monroe</p>`,
  `   <p id="quoteOutput">"So many books, so little time."</p>
               <p id="authorOutput">-- Frank Zappa</p>`,
  `   <p id="quoteOutput">"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."</p>
                     <p id="authorOutput">--Albert Einstein</p>`,
  `   <p id="quoteOutput">"A room without books is like a body without a soul."</p>
                           <p id="authorOutput">--Marcus Tullius Cicero</p>`,
  `   <p id="quoteOutput">"You only live once, but if you do it right, once is enough."</p>
                           <p id="authorOutput">--Mae West</p>`,
];

var displayedQuotes = [];

function generateQuote() {
  if (quotes.length === 0) {
    quotes = displayedQuotes.slice();
    displayedQuotes = [];
  }
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes.splice(randomIndex, 1)[0];
  document.getElementById("quote").innerHTML = randomQuote;
  displayedQuotes.push(randomQuote);
}
