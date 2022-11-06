const form = document.getElementById('form-tarefa');
const tarefas = [];


let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeTarefa = document.getElementById('nome-tarefa');

    if (tarefas.includes(inputNomeTarefa.value)) {
        alert(`A Tarefa: ${inputNomeTarefa.value} já foi cadastrada`);
    } else {
        tarefas.push(inputNomeTarefa.value);

        let linha = '<ul>';
        linha += `<li>${inputNomeTarefa.value}</li>`;
        linha += `</ul>`;

        linhas += linha;
    }

    inputNomeTarefa.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('ul');
    corpoTabela.innerHTML = linhas;
}