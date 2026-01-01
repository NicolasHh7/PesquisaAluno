import { createServer } from 'node:http';
const hostname = "127.0.0.1";
const port = 3001;
const alunosData = [
  {
    id: 1,
    nome: 'Lucas',
    sobrenome: 'Henrique',
    idade: 12,
    matricula: 8556781
  },
  {
    id: 2,
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 13,
    matricula: 8556782
  },
  {
    id: 3,
    nome: 'Pedro',
    sobrenome: 'Oliveira',
    idade: 11,
    matricula: 8556783
  },
  {
    id: 4,
    nome: 'Mariana',
    sobrenome: 'Costa',
    idade: 12,
    matricula: 8556784
  }
];

const server = createServer((req, res) => {
    // Retorna o corpo do body
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json")

    res.statusCode = 200; // OK
    res.end(JSON.stringify(alunosData))
});

server.listen(port, hostname, () => {
    console.log(`Servidor de pé em: http://${hostname}:${port}/`);
});