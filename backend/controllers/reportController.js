const pool = require('../config/db');
const { scrapeTwitter, scrapeInstagram } = require('../utils/socialMediaScraper');

async function submitReport(req, res) {
    const { description, image_url, lat, lon, event_type } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO reports (description, image_url, lat, lon, event_type) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [description, image_url, lat, lon, event_type]
        );

        const reportCountQuery = await pool.query(
            'SELECT COUNT(*) FROM reports WHERE event_type = $1 AND lat BETWEEN $2 AND $3 AND lon BETWEEN $4 AND $5',
            [event_type, lat - 0.1, lat + 0.1, lon - 0.1, lon + 0.1]
        );

        const reportCount = parseInt(reportCountQuery.rows[0].count);

        if (reportCount >= 20) {
            const twitterPosts = await scrapeTwitter(`#${event_type}`);
            const instaPosts = await scrapeInstagram(`#${event_type}`);
            const allPosts = [...twitterPosts, ...instaPosts];

            for (const post of allPosts) {
                await pool.query(
                    'INSERT INTO social_posts (source, text, lat, lon, timestamp) VALUES ($1, $2, $3, $4, $5)',
                    ['twitter/instagram', post.text, post.lat, post.lon, post.timestamp]
                );
            }

            await pool.query(
                'INSERT INTO alerts (report_id, alert_sent, alert_timestamp) VALUES ($1, TRUE, NOW())',
                [result.rows[0].id]
            );
        }

        res.status(201).json({ message: 'Report submitted successfully', report: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
}

async function getReports(req, res) {
    try {
        const result = await pool.query('SELECT * FROM reports ORDER BY timestamp DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = { submitReport, getReports };
