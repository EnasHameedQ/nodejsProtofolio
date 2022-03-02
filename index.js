const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('./assets'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('*', (req, res) => {
    res.send('notfound');
});

app.listen(PORT, () => console.log(`listening on port ${ PORT }`));