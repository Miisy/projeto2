const form = document.getElementById('agenda');
const nomes = [];
const numeros = [];
let linhas = '';

addEventListener('submit', function(e)
{
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});
function adicionaLinha(){

    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (nomes.includes(inputNome.value)){
        alert(`O nome ${inputNome.value} já foi inserido.`);
    } 

    else if (numeros.includes(parseFloat(inputNumero.value))){
        alert(`O número ${inputNumero.value} já foi inserido.`);
    } else{
    nomes.push(inputNome.value);
    numeros.push(parseFloat(inputNumero.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linhas += '</tr>';

    linhas += linha;
    }
    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela(){
    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;

}
