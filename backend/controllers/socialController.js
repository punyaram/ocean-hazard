const pool = require('../config/db');

async function getSocialPosts(req, res) {
    try {
        const result = await pool.query('SELECT * FROM social_posts ORDER BY timestamp DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = { getSocialPosts };
