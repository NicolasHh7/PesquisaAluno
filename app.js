const input = document.getElementById('estudante')
// input é um type text

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
const alunosFunc = async (termo = '') => {
  const alunos = document.getElementById('alunos');
  alunos.innerHTML = '';

  const response = await fetch('http://127.0.0.1:3001/');
  const dados = await response.json();

  const filtrados = termo
    ? dados.filter(aluno =>
        aluno.nome.toLowerCase().startsWith(termo)
      )
    : dados;

  for (const aluno of filtrados) {
    const column = document.createElement('li');
    column.className = 'aluno';

    column.innerHTML = `
      <h3>${aluno.nome} ${aluno.sobrenome}</h3>
      <p>Idade: ${aluno.idade}</p>
      <p>Matrícula: ${aluno.matricula}</p>
    `;

    alunos.appendChild(column);
  }
};

input.addEventListener('input', () => {
  const termo = input.value.trim().toLowerCase();

  if (termo === '') {
    document.getElementById('alunos').innerHTML = '';
    return;
  }

  alunosFunc(termo);
});

document.getElementById('all').addEventListener('click', () =>{
    alunosFunc()
})