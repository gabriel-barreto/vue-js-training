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

window.addEventListener('DOMContentLoaded', function() {
    const [ myParagraph ] = document.getElement('.paragraph');
    const [ myButton ]    = document.getElement('.btn');

    setTimeout(function() {
        myButton.setAttribute('disabled', true);
        myParagraph.setAttribute('align', 'center');
    }, 3000);
});