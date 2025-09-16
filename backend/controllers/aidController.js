const pool = require('../config/db');

async function addAidStatus(req, res) {
    const { report_id, aid_description, validated } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO aid_status (report_id, aid_description, validated) VALUES ($1, $2, $3) RETURNING *',
            [report_id, aid_description, validated]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
}

async function getAidStatus(req, res) {
    try {
        const result = await pool.query('SELECT * FROM aid_status ORDER BY timestamp DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = { addAidStatus, getAidStatus };
