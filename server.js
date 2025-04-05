const express = require('express');
const cors = require('cors');
const app = express();

// Cấu hình CORS
const corsOptions = {
    origin: ['https://your-netlify-site.netlify.app', 'https://your-github-pages-site.github.io'], // Thêm các domain frontend của bạn ở đây
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)); // Sử dụng CORS với các tùy chọn trên

// Các route của bạn (ví dụ: đăng nhập)
app.post('/api/login', (req, res) => {
    // Xử lý đăng nhập của bạn tại đây
    res.json({ message: 'Login successful' });
});

// Lắng nghe trên cổng
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
