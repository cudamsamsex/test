// authenticate.js

const express = require('express');
const bodyParser = require('body-parser');
const speakeasy = require('speakeasy');  // Thư viện dùng để tạo và xác thực mã 2FA
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Dữ liệu giả cho người dùng (thực tế bạn nên lưu trong cơ sở dữ liệu)
const users = {
    'user1': {
        secret: 'KVSQ3WVUMDKL7FYK'
    }
};

// API để tạo mã 2FA
app.post('/api/generate-2fa', (req, res) => {
    const { username } = req.body;

    if (!users[username]) {
        return res.status(400).send({ message: 'User not found' });
    }

    const secret = speakeasy.generateSecret({ name: 'Netflix Sharing App' });
    users[username].secret = secret.base32;

    // Trả về mã QR để người dùng quét với Google Authenticator
    res.status(200).send({ secret: secret.base32, qr_url: secret.otpauth_url });
});

// API để xác thực mã 2FA
app.post('/api/verify-2fa', (req, res) => {
    const { username, token } = req.body;

    if (!users[username]) {
        return res.status(400).send({ message: 'User not found' });
    }

    const verified = speakeasy.totp.verify({
        secret: users[username].secret,
        encoding: 'base32',
        token
    });

    if (verified) {
        return res.status(200).send({ message: 'Authentication successful' });
    } else {
        return res.status(400).send({ message: 'Invalid token' });
    }
});

// Chạy server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
