const { Error } = require('mongoose');
const { createShorthandPropertyAssignment } = require('typescript');
const userRegistration = require('../models/User');

exports.Login = (req, res, next) => {

  console.log('Api login hit');


  res.status(201).json({ message: 'user loggedin' });
}


exports.registration = (req, res, next) => {

  const user = new userRegistration(req.body);

  user.save().then(userCreated => {
    res.status(201).json({
      message:'Registration Successfull',
      user: {...userCreated}
  });
  })
    .catch(error => {
      res.status(500).json({
        message: "creating a user failed",
        error: error
      })
    })


}

exports.updateProfile = (req, res, next) => {

  console.log(req.body);

  res.status(201).json({ message: 'Profile updated' });
}
