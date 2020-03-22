const User = require('../models/User');
const Authentication = require('../models/Authentication');

module.exports = {
  async store(req, res) {
    const { user_name, password } = req.body;

    const password_hash = password + '123';

    const userExist = await User.findOne({ user_name });

    if (!userExist) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    if (userExist.password_hash !== password_hash) {
      return res.status(400).json({ message: 'Password does not match' });
    }

    const { _id: user_id } = userExist;
    const token = `123${user_id}-${password_hash}-${user_name}321`;
    const expiration_date = new Date();

    const user = await Authentication.create({
      user_id,
      token,
      expiration_date
    });

    return res.json(user);
  }
};
