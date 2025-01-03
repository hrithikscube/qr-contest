const express = require('express');
const QRCode = require('qrcode');
const cors = require('cors')

const app = express();
let scanCount = 0; // Counter for QR code scans

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
})

// Route to generate and display the QR code
app.get('/generate-qr', async (req, res) => {
    try {
        const redirectUrl = 'https://grabify.link/G5IEOG';
        const qrCodeDataURL = await QRCode.toDataURL(redirectUrl);
        res.send(`
           <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
            <h1>Scan the QR Code</h1>
            <img src="${qrCodeDataURL}" alt="QR Code" />
           </div>
        `);
    } catch (error) {
        res.status(500).send('Error generating QR code');
    }
});

// Route for QR code redirection and scan count
app.get('/scan-qr', (req, res) => {
    scanCount++; // Increment scan count
    res.redirect('https://scube.me'); // Redirect to your desired URL
});

// Route to get the scan count
app.get('/scan-count', (req, res) => {
    res.json({ scanCount });
});

app.listen(3333, () => {
    console.log('Server running at port 3333');
});
