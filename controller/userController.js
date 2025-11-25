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
