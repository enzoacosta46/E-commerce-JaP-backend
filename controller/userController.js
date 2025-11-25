const jwt = require("jsonwebtoken");

const loginUsuario = (req, res) => {
  const { username, password } = req.body;
  const token = generateAccessToken(username);
  if (username !== null && password !== "") {
    res.status(200).json({ username, token });
  } else {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
};

module.exports = {
  loginUsuario,
};

// Generate a token
function generateAccessToken(username) {
  return jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });
}

// Middleware function to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
