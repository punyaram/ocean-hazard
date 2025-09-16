const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const reportRoutes = require('./routes/reports');
const socialRoutes = require('./routes/socialPosts');
const alertRoutes = require('./routes/alerts');
const aidRoutes = require('./routes/aid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/reports', reportRoutes);
app.use('/api/social-posts', socialRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/aid', aidRoutes);

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
});
