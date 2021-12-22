function fazerRequisicao(){
    const request = new XMLHttpRequest()

    request.open('GET', 'https://jsonplaceholder.typicode.com/posts')

    request.onload = function () {
        console.log(JSON.parse(this.responseText))
    }

    request.onerror = function () {
        console.log('erro ao executar a requisição')
    }

    request.send()
}

console.log(fazerRequisicao());