const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
mongoose.connect('mongodb+srv://riyankpatel036:Riyankjenu362136@cluster0.fvzbp.mongodb.net/userappnew?retryWrites=true&w=majority&appName=Cluster0')

const User = mongoose.model('Users', {name: String, email: String, password: String, gender: String});

app.post('/signup', async function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const gender = req.body.gender;

  const existingUser = await User.findOne({ email: username});
  if (existingUser) {
    return res.status(400).send('Username already exists');
  }
const user = await User.create({
  name: name,
  email: username,
  password: password,
  gender: gender
});

// const user = new User({
//   name: name,
//   email: username,
//   password: password,
//   gender: gender
// });

user.save();
 res.json({
  "msg": "User created successfully"
 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})