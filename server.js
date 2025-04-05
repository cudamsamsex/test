const express = require('express');
const cors = require('cors');
const app = express();

// Cấu hình CORS để chỉ cho phép GitHub Pages của bạn
app.use(cors({
  origin: 'https://cudamsamsex.github.io',  // Cho phép yêu cầu từ GitHub Pages
  methods: ['GET', 'POST'],
}));

// Đặt endpoint của bạn
app.post('/api/check-login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'nadeptrai' && password === 'nadeptrai') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Chạy server trên port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
