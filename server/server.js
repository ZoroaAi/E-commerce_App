const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the build dir
app.use(express.static(path.join(__dirname,'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Server Start
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});