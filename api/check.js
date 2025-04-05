export default function handler(req, res) {
  const { key } = req.query;

  if (key === 'Na123') {
    res.status(200).json({
      success: true,
      content: `
        <h3>Netflix Account</h3>
        <p><strong>Email:</strong> lifexyz2468@gmail.com</p>
        <p><strong>Password:</strong> 25542409</p>
        <hr>
        <h4>Profiles</h4>
        <ul>
          <li>Profile 1 - PIN: 1111</li>
          <li>Profile 2 - PIN: 0202</li>
          <li>Profile 3 - PIN: 1357</li>
          <li>Profile 4 - PIN: 4488</li>
          <li>Profile 5 - PIN: 0055</li>
        </ul>
      `
    });
  } else {
    res.status(401).json({ success: false });
  }
}
