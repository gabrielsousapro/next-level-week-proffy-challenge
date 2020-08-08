// Procurar no botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// clicar no botão

// ativar uma função
function cloneField() {
    //copiar o conteúdo do formulário, que formulário?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    // para cada campo, limpar
    fields.forEach(function(field) {
        // Pega o field do momento e limpa ele
        field.value = ""
    })
    //onde copiar 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}