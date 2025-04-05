// api/login.js
const accounts = {
    admin: {
        password: "phanhoangna",  // Đổi mật khẩu theo yêu cầu của bạn
        netflixAccount: {
            username: "netflixuser",
            password: "netflixpass",
            profiles: [
                { name: "Profile 1", password: "1111" },
                { name: "Profile 2", password: "0202" },
                { name: "Profile 3", password: "1357" },
                { name: "Profile 4", password: "4488" },
                { name: "Profile 5", password: "0055" },
            ],
        },
    },
};

export default function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;
        if (accounts[username] && accounts[username].password === password) {
            res.status(200).json(accounts[username].netflixAccount);
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
