const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes = [];
function newQuotes() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if Author field is black and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }
    else {
        authorText.textContent = quote.author;
    }
    //if we have author then 
    // authorText.textContent = quote.author;
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}
//get quotes from API 
async function getOuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const respone = await fetch(apiUrl);
        apiQuotes = await respone.json();
        newQuotes();
    } catch (error){
        //Catch error Here
    }
}
//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl,'_blank');
}
//Event listeners
newQuoteBtn.addEventListener('click',newQuotes);
twitterBtn.addEventListener('click',tweetQuote);
// on load
getOuotes();

// If we use our local codes
// function newQuotes(){
// const quote = loaclQuotes[Math.floor(Math.random() * localQuotes.length)];
// console.log(quote);

// }
