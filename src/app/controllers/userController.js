const User = require('../models/User');
const user = require('../models/User');
exports.Login = (req, res, next) => {

  console.log('Api login hit');


  res.status(201).json({ message: 'user loggedin' });
}


exports.registration = (req, res, next) => {

  const user = new User({
    firstName: req.body.firstName,
    lasttName: req.body.lasttName,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    dob: req.body.mobile,
    role: req.body.role

  });

  user.save().then(userCreated => {
    res.status(201).json({
      message: 'user created Successfully',
      user: {
        ...userCreated,
        id: userCreated._id
      }
    });
  })
    .catch(error => {
      res.status(500).json({
        message: "creating a user failed"
      })
    })


}

exports.updateProfile = (req, res, next) => {

  console.log(req.body);

  res.status(201).json({ message: 'Profile updated' });
}
