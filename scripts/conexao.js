function buscarUsuarios(){
    const request = new XMLHttpRequest()

    // request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    request.open('GET', 'http://meuremediar-api-dev.azurewebsites.net/api/v1/User')


    request.onload = function () {
        console.log(JSON.parse(this.responseText))
    }

    request.onerror = function () {
        console.log('erro ao executar a requisição')
    }

    request.send()
}

function buscarPacientes(){
    const request = new XMLHttpRequest()

    // request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    request.open('GET', 'http://meuremediar-api-dev.azurewebsites.net/api/v1/Patient')


    request.onload = function () {
        console.log(JSON.parse(this.responseText))
    }

    request.onerror = function () {
        console.log('erro ao executar a requisição')
    }

    request.send()
}

function createUser(login, password){
    const request = new XMLHttpRequest();
    request.open("POST", "http://meuremediar-api-dev.azurewebsites.net/api/v1/User", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({
        login: login,
        password: password
    }));
}

function createPatient(firstName, lastName, email, contactCel, contactPhone){
    const request = new XMLHttpRequest();
    request.open("POST", "http://meuremediar-api-dev.azurewebsites.net/api/v1/Patient", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        contactCel: contactCel, 
        contactPhone: contactPhone
    }));
}


