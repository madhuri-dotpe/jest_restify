const userService = require('./../service/user');

const getUser = (req, res) => {
  const userId = req.params.id;
  userService.getUser(userId, (err, data) => {
    if (err) {
      return res.send(400, { err, msg: 'Could not fetch user' });
    }
    if (!data) {
      return res.send(404, { msg: 'User not found' });
    }
    return res.send(200, { data, msg: 'User data fetched successfully' });
  });
};

module.exports = { getUser, createUser };
