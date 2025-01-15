window.onload = pergNome();

function pergNome(){
    var nome = prompt('Qual é o seu nome?');

    if (nome == null) {
        alert('Você cancelou.');
    } else {
        cumprimentar(nome);
    }
}

function cumprimentar(nome){
    if(confirm('Olá, ' + nome + '!\n\n' + 'Você sabe programar em JavaScript?')){
        alert('Que bom, ' + nome + '! Espero que você aprenda ainda mais!')
    } else{
        alert(('Não tem problema, ' + nome + '! Você irá aprender agora!'))
    }
}