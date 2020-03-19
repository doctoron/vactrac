const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if there is not a token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
<<<<<<< HEAD
    const decoded = jwt.verify(token, config.get('JWTSECRET'));
=======
    const decoded = jwt.verify(token, config.get('jwtSecret'));
>>>>>>> 4ed2bdeee0fc0ce9c5c215c0d8d40284375346e3

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
