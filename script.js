// Constructor Function
// Funções responsáveis pela criação de obejtos.
// O conceito de uma função construtora de objetos é implementamos em outras linguagens como Classes.


// Constructor function -> É a função responsavel pela criação de objetos
// Constroi a função normalmente
// Atribui o valor de this (this é o objeto que vai ser criado)

function Button(text, background){
    this.text = text; // this.text -> 'text' pode ter qualquer nome, é apenas uma convenção colocar o nome igual ao métoda da função
    this.background = background;
}

Button.prototype.element = function() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');
console.log(blueButton);



// Class
// O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras.
// Agora podemos utilizar a palavra chave 'class'.
// É considerada 'syntactial sugar', pois por baixo dos panos continua utilizando o sistema de protótipo de uma função construtora parar criar a classe.

class Button{
    constructor(text, background){ // No 'constructor' que passamos os métodos
        this.text = text;
        this.background = background;
    }

    element() { // Métodos do protótipo (element -> pode ter qualquer nome)
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;  // Tem acesso a classe construtora
        buttonElement.style.background = this.background;
        return buttonElement;
    }
}

const blueButtonTwo = new Button('Comprar', 'blue');
console.log(blueButtonTwo.element());



// Class vs Constructor Function

class ButtonClass {
    constructor(propriedade){
        this.propriedade = propriedade;
    }

    metodo1() {};
    metodo2() {};
}

function ButtonConstructor(propriedade) {
    this.propriedade = propriedade;
}
ButtonConstructor.prototype.metodo1 = function() {};
ButtonConstructor.prototype.metodo2 = function() {};


// Constructor
// O método 'constructor(args) {}' é um método especial de uma classe.
// Nele você irá definir todas as propriedaddes do objeto que será criado.
// Os argumentos passados em 'new', vão direto para o construtor 

class Button {
    constructor(text,  background, color){
        this.text = text;
        this.background = background;
        this.color = color;
    };
};

const greenButton = new Button('Clique', 'green', 'white');
// Button {text: 'Clique', , background: 'blue', color: 'white'}


// Constructor Return
// Por padrão a classe retorna 'this'.
// Ou seja, 'this' é o objeto criado com o 'new Class'.
// Podemos modificar isso alterando o 'return' do 'constructor', o problema é que perderá toda a referência do objeto.

class Button {
    constructor(text){
        this.text = text;
        return this.element(); // não fazer
    }
    element() {
        document.createElement('button').innerText = this.text;
    }
}

const btn = new Button('Clique');
// <button>Clique</button> 




// This
// Assim como em uma função construtora, 'this' faz referência ao objeto criado com 'new'.
// Você pode acessar as propriedades e métodos da classe utilizando o 'this'

class Button {
    constructor(text, background, color){
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendElement(targe){
        const targetElement = document.querySelector(targe);
        targetElement.appendChield(this.element());
    }
}

const yellowButton = new Button('Clique');
yellowButton.appendChield('body');



// Propriedades
// Podemos passar qualquer valor dentro de uma propriedade

class Button {
    constructor(options){
        this.options = options;
    }
}

const blueOptions = {
    backgroundColor: 'blue',
    color: 'white',
    text: 'Clique',
    borderRaidus: '4px',
};

const blueButton2 = new Button(blueOptions);
blueButton2.options;




// Static vs Prototype
// Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. 
// Porém podemos criar métodos diretamente na classe utilizando a palavra chave 'static'. 
// Assim como '[].map()' é um método de uma 'array' e 'Array.from()' é um método do construtor 'Array'.

class Button {
    constructor(text) {
      this.text = text;
    }
    static createButton(background, text) {
      const elementButton = document.createElement('button');
      elementButton.style.background = background;
      elementButton.innerText = text;
      return elementButton;
    }
}
  
const blueButtonStatic = Button.createButton('blue', 'Clique');


// Static
// Você pode utilizar o método 'static' para retornar a própria classe com propriedades já pré definidas

class Button {
    constructor(text, background){
        this.text = text;
        this.background = background;
    }

    element(){
        const elementButton = document.createElement('button');
        elementButton.innerText = this.text;
        elementButton.style.background = this.background;
        return elementButton;
    }

    static createBlue(text){
        return new Button(text, 'blue');
    }
}

const blueButton3 = Button.createBlue('Comprar');