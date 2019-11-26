const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router()

app.set('view engine', 'pug')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))


router.get('/', (req, res) => {
  res.render('index')
})

app.use('/', router)

//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports = app