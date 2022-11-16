function saludar(saludarFuncion){
    saludarFuncion();
}

const saludoInternacional = function (){
    console.log('Hola, mundo');
}

const saludoMexicano = () => {
    console.log('Quihubole!')
}

saludar(saludoInternacional);
saludar(saludoMexicano);