import express from 'express';

const app = express();

app.get('/users', () => {
  console.log('')
});

app.listen(3333);
t