// Function to open a new window with the specified URL
function openSearchWindow(url, buttonId) {
    const input = prompt("Enter a search term:");
    if (input) {
        const fullUrl = `${url}${input}`;
        window.open(fullUrl);
        document.getElementById(buttonId).innerHTML = input;
    }
}

// Function to handle button clicks
function handleButtonClick(buttonId, url) {
    document.getElementById(buttonId).addEventListener('click', function () {
        openSearchWindow(url, buttonId);
    });
}

// Add event listeners for each button
handleButtonClick('promptBtn', 'https://www.google.com/search?q=');
handleButtonClick('twitterPromptBtn', 'https://twitter.com/search?q=');
// Add similar improvements to other buttons
// ...

// Handle the special case for searching all websites
document.getElementById('searchAllPromptBtn').addEventListener('click', function () {
    const input = prompt("Enter a search term:");
    if (input) {
        const searchEngines = [
            'https://twitter.com/search?q=',
            'https://www.youtube.com/results?search_query=',
            'https://www.instagram.com/explore/tags/',
            'https://www.linkedin.com/search/results/index/?keywords=',
            'https://www.pinterest.com/search/pins/?q=',
            'https://www.github.com/search?q='
        ];

        searchEngines.forEach(engine => {
            window.open(`${engine}${input}`);
        });

        document.getElementById('searchAllPromptBtn').innerHTML = input;
    }
});
