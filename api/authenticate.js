import { totp } from 'otplib';

export default function handler(req, res) {
  const { token } = req.query;  // Lấy token từ query params

  // 🔐 Secret key (dùng với Google Authenticator). Bạn có thể thay bằng cái bạn tạo trên 2fa.city
  const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';  // Thay bằng mã secret của bạn

  // ❌ Nếu không gửi token thì trả lỗi
  if (!token) {
    return res.status(400).json({ error: 'Missing token' });
  }

  // ✅ Kiểm tra mã có hợp lệ không
  const isValid = totp.check(token, secret);  // Kiểm tra mã OTP

  // Trả kết quả
  if (isValid) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false });
  }
}
