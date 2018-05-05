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

// --> Exibindo o conteudo dos elementos encontrados!
window.addEventListener('DOMContentLoaded', function() {
    const myParagraphs = document.getElement('.paragraph');
    myParagraphs.map(function(each) {
        console.log(each.textContent);
    });
});