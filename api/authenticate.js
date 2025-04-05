import { totp } from 'otplib';

export default function handler(req, res) {
  const { token } = req.query;

  // 🔐 Secret key (dùng với Google Authenticator). Bạn có thể thay bằng cái bạn tạo trên 2fa.city
  const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'; // Thay bằng key 2FA của bạn

  // ❌ Nếu không gửi token thì trả lỗi
  if (!token) {
    return res.status(400).json({ error: 'Missing token' });
  }

  // ✅ Kiểm tra mã có hợp lệ không
  const isValid = totp.check(token, secret);

  // Trả kết quả
  if (isValid) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, error: 'Incorrect 2FA code!' });
  }
}
