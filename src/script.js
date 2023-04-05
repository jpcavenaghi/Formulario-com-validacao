const form = document.getElementById('form')
const campos = document.querySelectorAll('.campo');
const avisos = document.querySelectorAll('.aviso');
const btnSubmit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validarNome();
    validarSenha();
    validarFone();
    validarMensagem();
})

function validarNome() {
    if (campos[0].value.length == 0) {
        avisos[0].classList.add('ativo');
        campos[0].style.border = '3px solid red';
    } else {
        avisos[0].classList.remove('ativo');
        campos[0].style.border = '3px solid greenyellow';
    }
}

function validarSenha() {
    if (campos[1].value.length == 0) {
        avisos[1].classList.add('ativo');
        campos[1].style.border = '3px solid red';
    } else {
        avisos[1].classList.remove('ativo');
        campos[1].style.border = '3px solid greenyellow';
    }
}

function validarFone() {
    if (campos[2].value.length == 0) {
        avisos[2].classList.add('ativo');
        campos[2].style.border = '3px solid red';
    } else {
        avisos[2].classList.remove('ativo');
        campos[2].style.border = '3px solid greenyellow';
    }
}

function validarMensagem() {
    if (campos[3].value.length == 0) {
        avisos[3].classList.add('ativo');
        campos[3].style.border = '3px solid red';
    } else {
        avisos[3].classList.remove('ativo');
        campos[3].style.border = '3px solid greenyellow';
    }
}