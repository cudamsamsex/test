module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://cudamsamsex.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();  // Xử lý preflight request
  }

  // API logic: check login
  const { username, password } = req.body;
  if (username === 'nadeptrai' && password === 'nadeptrai') {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
};
