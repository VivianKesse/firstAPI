const express  = require("express");
//converte o body da requisição pra vários formatos, inclusive JSON
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('Digite a rota com o nome correspondente a operação que deseja realizar!');
})

app.post('/api/soma', (req, res) => {
  const x = req.body.x;
  const y = req.body.y;
  const result = x+y;
  res.json(result);
})

app.post('/api/subtracao', (req, res) => {
  const x = req.body.x;
  const y = req.body.y;
  const result = x-y;
  res.json(result);
})

app.post('/api/multiplicacao', (req, res) => {
  const x = req.body.x;
  const y = req.body.y;
  const result = x*y;
  res.json(result);

})

app.post('/api/divisao', (req, res) => {
  const x = req.body.x;
  const y = req.body.y;
  if(y==0)
  {
    res.status(400).json({ error: 'A divisão por 0 é uma indeterminação!' });
  }
  else {
    const result = x/y;
    res.json(result);
  }
})

app.listen(port, () => {
  console.log(`A API está rodando na porta http://localhost:${port}`)
})