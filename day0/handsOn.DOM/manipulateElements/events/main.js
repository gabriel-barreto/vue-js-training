// --> Criando uma funcao de prototipo personalizada
/**
 * Retorna os elementons encontrados na DOM em um Array
 * 
 * @param { String } selector Seletor que voce deseja usar para procurar elementos na DOM
 * @returns { Array } Elementos encontrados
 */
HTMLDocument.prototype.getElement = function (selector) {
    const elements = this.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
};

function mostraSomeP () {
    const [myParagraph] = document.getElement('.paragraph');
    if (myParagraph.style.display == 'none') {
        myParagraph.style.display = 'block';
    } else {
        myParagraph.style.display = 'none';
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const [ myButton ] = document.getElement('.btn');
    myButton.addEventListener('click', mostraSomeP());
});