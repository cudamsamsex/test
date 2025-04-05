// api/authenticate.js

import speakeasy from 'speakeasy';

// API handler cho yêu cầu POST (xác thực 2FA)
export default function handler(req, res) {
    // Kiểm tra nếu đây là một yêu cầu POST
    if (req.method === 'POST') {
        // Lấy token và secret từ body của yêu cầu
        const { token, secret } = req.body;

        // Kiểm tra mã 2FA với secret
        const verified = speakeasy.totp.verify({
            secret: secret,
            encoding: 'base32',
            token: token,
        });

        // Nếu mã hợp lệ, trả về thông báo thành công
        if (verified) {
            return res.status(200).json({ message: 'Authenticated successfully!' });
        } else {
            // Nếu mã không hợp lệ, trả về lỗi
            return res.status(400).json({ error: 'Invalid 2FA token!' });
        }
    } else {
        // Nếu không phải yêu cầu POST, trả về lỗi
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}