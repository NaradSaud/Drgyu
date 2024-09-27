const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json()); // Add this line

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/v1', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
