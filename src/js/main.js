document.addEventListener("DOMContentLoaded", function () {
    var content = "";
    var quotes = ["Don't cry because it's over, smile because it happened.",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth."];
    var button = document.getElementById('newQuote');
    button.onclick = function () {
        content = quotes[Math.floor(Math.random() * (quotes.length))];
        var place = document.getElementById('message');
        place.innerHTML = content;
    };

    document.getElementById('tweet').onclick = function() {
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(content));
    };
});