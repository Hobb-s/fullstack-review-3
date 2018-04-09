const UserModel = require('../../database/models/UserModel.js');
const bcrypt = require('bcrypt');

module.exports = {
  signUp: (req, res) => {
    bcrypt.genSalt(10)
      .then(salt => {
        bcrypt.hash(req.body.password, salt)
          .then(hashedPassword => {
            const user = new UserModel({
              username: req.body.username,
              password: hashedPassword
            });

            user.save()
              .then(data => {
                console.log('signup data: ', data);
                res.status(200).send('Signup successful');
              })
              .catch(error => {
                res.status(400).send('Signup failed');
              });

          })
          .catch(error => {
            // 
          });
      })
      .catch(error => {
        // 
      });
  },

  login: (req, res) => {
    UserModel.find({ username: req.params.username })
      .then(data => {
        if (data.length) {
          bcrypt.compare(req.params.password, data[0].password, (err, result) => {
            result ?
              res.status(202).send('Successfully logged in') :
              res.status(200).send('Invalid password');
          });
        } else {
          res.status(200).send('No user found');
        }
      })
      .catch(error => {
        res.status(404).send('Login failed');
      });
  }
}