const form = document.querySelector('#form')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por Favor, preencha o seu e-mail!")
        return;
    }
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ter no minimo ter 8 digitos!")
        return;
    }

    // Se todos os campos estiverem corretamente prenchidos, envie o form
    form.submit();
})  

// Função que valida e-mail
function isEmailValid(email){
    // criar uma regex para validar email

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true
    }
    return false;

}
// função que valida a senha

function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        //senha valida
        return true
    }
    //senha invalida
    return false;
}