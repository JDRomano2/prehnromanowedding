'use strict';

const express = require('express');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(favicon(path.join(__dirname, 'dist', 'images', 'favicon.ico')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
