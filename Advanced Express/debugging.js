const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db')
const morgan = require('morgan');
const express = require('express');
const app = express();

const dev_env = process.env. DEV_ENV;

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('morgan enabled.....');
}

app.get('/', (req, res) => {
    console.log(`we are on the homepage`);
    res.send('Hello World')
})

// For Db (Database) work
dbDebugger('Connected to database...')

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}.....`))