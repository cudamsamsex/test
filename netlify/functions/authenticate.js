import { totp } from 'otplib';

export default function handler(req, res) {
  const { token } = req.query;

  // Mã secret (mã 2FA) bạn tạo trong Google Authenticator hoặc 2fa.live
  const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';  // Thay bằng key của bạn

  // Kiểm tra nếu không có mã 2FA
  if (!token) {
    return res.status(400).json({ error: 'Missing token' });
  }

  // Kiểm tra tính hợp lệ của mã 2FA
  const isValid = totp.check(token, secret);

  // Trả kết quả xác thực
  if (isValid) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false });
  }
}
