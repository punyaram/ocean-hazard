const pool = require('../config/db');

async function getAlerts(req, res) {
    try {
        const result = await pool.query('SELECT * FROM alerts ORDER BY alert_timestamp DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = { getAlerts };
