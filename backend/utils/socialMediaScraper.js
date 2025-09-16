async function scrapeTwitter(hashtag) {
    console.log(`Scraping Twitter for hashtag: ${hashtag}`);
    return [
        { text: `Example Tweet about ${hashtag}`, lat: 12.34, lon: 56.78, timestamp: new Date() }
    ];
}

async function scrapeInstagram(hashtag) {
    console.log(`Scraping Instagram for hashtag: ${hashtag}`);
    return [
        { text: `Example Instagram post about ${hashtag}`, lat: 23.45, lon: 67.89, timestamp: new Date() }
    ];
}

module.exports = { scrapeTwitter, scrapeInstagram };
