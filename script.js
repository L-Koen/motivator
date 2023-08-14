/* Script to hold and select the random motivation quotes and titles. */
// Initialize class, function, and variable to store Quotes
class quoteClass {
  constructor(quote, author) {
    this.quote = quote;
    this.author = author;
  }
}

const quotes = [];

const newQuote = (quote, author) => {
  quotes.push(new quoteClass(quote, author));
}

// now populate with some quotes
newQuote('It never gets easier, you just go faster', 'Greg Lemond');
newQuote('Don\'t buy upgrades, ride up grades', 'Eddy Merckx');
newQuote('It\'s only a hill, you\'ll get over it', 'Random internet person');
newQuote('Shut up legs!', 'Jens Voigt');
newQuote('As long as I’m riding a bike I know I’m the luckiest guy in the world', 'Mark Cavendish');
newQuote('Remember: resting is part of training', 'internet');

// Now onto the titles
const titles = [];
titles.push('Biggest HIITs');
titles.push('Consistency is key');
titles.push('Ride a bike, see the world');
titles.push('Don\'t forget to enjoy the moment');
titles.push('HIIT that sweet spot');
titles.push('Relax, take it easy');

// and some images
const images = [];
images.push('./images/1.jpg');
images.push('./images/2.jpg');
images.push('./images/3.jpg');
images.push('./images/4.jpg');
images.push('./images/5.jpg');

// Get a random title, quote combination.
// However, if you get the title about relax, the quote should be about resting as well.
let randomQuote = Math.floor(Math.random() * quotes.length);
let randomTitle = 0
let randomImage = 0

if (randomQuote === (quotes.length -1)) {
  randomTitle = titles.length -1;
  randomImage = images.length -1;

} else {
  randomTitle = Math.floor(Math.random() * (titles.length -1));
  randomImage = Math.floor(Math.random() * (images.length -1));
}

// Now make sure to populate the page
titleElement = document.getElementById('title');
quoteElement = document.getElementById('quote');
authorElement = document.getElementById('author');
imageElement = document.getElementById('image')

titleElement.innerHTML = titles[randomTitle];
quoteElement.innerHTML = quotes[randomQuote].quote;
authorElement.innerHTML = '--  ' + quotes[randomQuote].author + '  --';
imageElement.src = images[randomImage];
