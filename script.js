document.addEventListener('DOMContentLoaded', function() {
    const shortenBtn = document.getElementById('shorten-btn');
    const longUrlInput = document.getElementById('long-url');
    const shortUrlContainer = document.getElementById('short-url-container');
    const shortUrlAnchor = document.getElementById('short-url');

    shortenBtn.addEventListener('click', function() {
        const longUrl = longUrlInput.value.trim();
        if (longUrl !== '') {
            // Here you would call your server-side endpoint to generate the short URL
            const shortUrl = generateShortUrl(longUrl);
            displayShortUrl(shortUrl);
        }
    });

    function generateShortUrl(longUrl) {
        // This is a placeholder function to generate a short URL
        // In a real-world scenario, you would call your server-side endpoint
        // to generate the short URL and return it
        const baseUrl = 'http://example.com/';
        const shortCode = Math.random().toString(36).substring(2, 8); // Generate a random string
        return baseUrl + shortCode;
    }

    function displayShortUrl(shortUrl) {
        shortUrlAnchor.href = shortUrl;
        shortUrlAnchor.textContent = shortUrl;
        shortUrlContainer.classList.remove('hidden');
    }
});
