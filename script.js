const input_cep = document.querySelector('#cep')
const endereço = document.querySelector('#endereço')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')

cep.addEventListener('blur', () => {
    
    let cep = input_cep.value;

    if (cep.length !== 8) { /*(!) = for difente de 8 ele vai retornar*/
        alert('[ERROR] CEP Invalido')
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)/*REQUISIÇÃO HTTP*/
       .then(response => response.json())
       .then(json => {

           cep.value = json.cep;
           endereço.value = json.logradouro;
           bairro.value = json.bairro;
           cidade.value = json.localidade;
       });     
 
})