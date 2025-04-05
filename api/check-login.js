module.exports = async (req, res) => {
  // Cấu hình CORS cho phép frontend từ GitHub Pages truy cập
  res.setHeader('Access-Control-Allow-Origin', 'https://cudamsamsex.github.io');  // Thay URL frontend của bạn
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');  // Phương thức cho phép
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Các headers cho phép

  // Nếu là yêu cầu OPTIONS (preflight request), trả về 200
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Kiểm tra thông tin đăng nhập
  const { username, password } = req.body;
  if (username === 'nadeptrai' && password === 'nadeptrai') {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
};
