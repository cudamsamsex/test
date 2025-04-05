const express = require('express');
const bodyParser = require('body-parser');
const speakeasy = require('speakeasy');

const app = express();
const port = process.env.PORT || 5000;

// Middleware để parse JSON
app.use(bodyParser.json());

// Mã 2FA lưu trữ trong hệ thống
const secret = speakeasy.generateSecret({ length: 20 });

// Endpoint để xác thực mã 2FA
app.post('/verify-2fa', (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ message: 'Code is required' });
    }

    // Kiểm tra mã 2FA gửi từ client
    const verified = speakeasy.totp.verify({
        secret: secret.base32,
        encoding: 'base32',
        token: code
    });

    if (verified) {
        return res.status(200).json({ message: '2FA code is valid' });
    } else {
        return res.status(400).json({ message: 'Invalid 2FA code' });
    }
});

// Khởi chạy server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
