export default function handler(req, res) {
  const { username, password } = req.body;

  if (username === 'nadeptrai' && password === 'nadeptrai') {
    res.status(200).json({
      account: "lifexyz2468@gmail.com",
      pass: "25542409",
      profiles: [
        { name: "Profile 1", pin: "1111" },
        { name: "Profile 2", pin: "0202" },
        { name: "Profile 3", pin: "1357" },
        { name: "Profile 4", pin: "4488" },
        { name: "Profile 5", pin: "0055" }
      ]
    });
  } else {
    res.status(401).json({ error: "Sai tài khoản hoặc mật khẩu!" });
  }
}
