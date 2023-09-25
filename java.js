function MudaDesenho(){
    const texto = document.querySelector("h1");
    const textos = document.querySelector("h4");
    const textos2 = document.querySelector("h4");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const iframe = document.querySelector("iframe");
    const a1 = document.querySelector(".a1");
    const a2 = document.querySelector(".a2");
    const a3 = document.querySelector(".a3");
    const a4 = document.querySelector(".a4");
    const a5 = document.querySelector(".a5");
    const a6 = document.querySelector(".a6");
    const a7 = document.querySelector(".a7");
    const a8 = document.querySelector(".a8");
    const a9 = document.querySelector(".a9");
    const a10 = document.querySelector(".a10");
    const a11 = document.querySelector(".a11");
    const a12 = document.querySelector(".a12");
    const a13 = document.querySelector(".a13");
    const a14 = document.querySelector(".a14");

    if(valor==1){
        texto.innerHTML = "Definição de POO";
        textos.innerHTML = "Para uma linguagem ser considerada no paradigma do POO, existem quatro características principais que precisam fazer parte de sua aplicação: abstração, encapsulamento, herança e polimorfismo.";
        imagem.setAttribute("src","img/definicao.png");
        imagem.setAttribute("width","300px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==2) {
        texto.innerHTML = "Características da programação OO";
        textos.innerHTML = "Encapsulamento, herança e polimorfismo: as principais características da POO. As duas bases da POO são os conceitos de classe e objeto. Desses conceitos, derivam alguns outros conceitos extremamente importantes ao paradigma, que não só o definem como são as soluções de alguns problemas da programação estruturada.";
        imagem.setAttribute("src","img/1.png");
        imagem.setAttribute("width","300px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==3) {
        texto.innerHTML = "Os Pilares da OO";
        iframe.setAttribute("src","teste.html");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a14.innerHTML = "";
    }

    else if(valor==4) {
        texto.innerHTML = "O que é Objeto ?";
        textos.innerHTML = "Uma entidade que possui estado e comportamento é conhecida como um objeto, por exemplo, cadeira, bicicleta, marcador, caneta, mesa, carro, etc. Pode ser física ou lógica (tangível e intangível). O exemplo de um objeto intangível é o sistema bancário. Um objeto tem três características: o Estado: representa os dados (valor) de um objeto. o Comportamento: representa o comportamento (funcionalidade) de um objeto, como depósito, retirada, etc. o Identidade: uma identidade de objeto geralmente é implementada por meio de um ID exclusivo. O valor do ID não é visível para o usuário externo. No entanto, é usado internamente pela JVM para identificar cada objeto exclusivamente.";
        imagem.setAttribute("src","img/4.png");
        imagem.setAttribute("width","300px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==5) {
        texto.innerHTML = "O que é Classe ?";
        textos.innerHTML = "Uma classe é um gabarito para a definição de objetos. Através da definição de uma classe, descreve-se que propriedades -- ou atributos -- o objeto terá. Além da especificação de atributos, a definição de uma classe descreve também qual o comportamento de objetos da classe, ou seja, que funcionalidades podem ser aplicadas a objetos da classe. Essas funcionalidades são descritas através de métodos. Um método nada mais é que o equivalente a um procedimento ou função, com a restrição que ele manipula apenas suas variáveis locais e os atributos que foram definidos para a classe.";
        imagem.setAttribute("src","img/classe.png");
        imagem.setAttribute("width","400px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==6) {
        texto.innerHTML = "O que são atributos ?";
        textos.innerHTML = "Os Atributos em Programação Orientada a Objetos são os elementos que definem a estrutura de uma classe. Os atributos também são conhecidos como variáveis de classe, e podem ser divididos em dois tipos básicos: atributos de instância e de classe. Os valores dos atributos de instância determinam o estado de cada classe.";
        imagem.setAttribute("src","img/atributo.png");
        imagem.setAttribute("width","500px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==7) {
        texto.innerHTML = "O que são métodos ?";
        textos.innerHTML = "Um método é uma sub-rotina que é executada por um objeto ao receber uma mensagem. Os métodos determinam o comportamento dos objetos de uma classe e são análogos a funções ou procedimentos da programação estruturada. O envio de mensagens (chamada de métodos) pode alterar o estado de um objeto.";
        imagem.setAttribute("src","img/metodos.jpg");
        imagem.setAttribute("width","400px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==8) {
        texto.innerHTML = "O que são pacotes ? como implementar classes em pacotes ?";
        iframe.setAttribute("src","testes.html");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==9) {
        texto.innerHTML = "O que é uma interface em Java ?";
        textos.innerHTML = "Uma interface em Java ela 'obriga' um determinado grupo de classes a ter métodos ou propriedades em comum para existir em um determinado contexto mas pode ser implementado em classes diferentes. É muito utilizada em grandes projetos para obrigar o programador a seguir o padrão do projeto.";
        imagem.setAttribute("src","img/interface.png");
        imagem.setAttribute("width","500px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==10) {
        texto.innerHTML = "O que são enumerações ?";
        textos.innerHTML = "São tipos de campos que consistem em um conjunto fixo de constantes (static final), sendo como uma lista de valores pré-definidos. Na linguagem de programação Java, pode ser definido um tipo de enumeração usando a palavra chave enum. Todos os tipos enums implicitamente estendem a classe java. ";
        imagem.setAttribute("src","img/enu.jpg");
        imagem.setAttribute("width","300px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==11) {
        texto.innerHTML = "O que é Serialização de Objetos em Java ?";
        textos.innerHTML = "A serialização é quando um objeto é transformado para um conjunto de bytes para ser manipulado mais facilmente.";
        imagem.setAttribute("src","img/sere.png");
        imagem.setAttribute("width","300px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }

    else if(valor==12) {
        texto.innerHTML = "O que é relacionamento de objetos ?";
        textos.innerHTML = "Os relacionamentos ligam as classes/objetos entre si criando relações lógicas entre estas entidades. Os relacionamentos podem ser de: Associação: É uma conexão entre classes, e também significa que é uma conexão entre objetos daquelas classes. Uma associação representa que duas classes possuem uma ligação. Agregação: Quando uma parte de um objeto é composto de outro. Agregação: Quando uma parte de um objeto é composto de outro.";
        imagem.setAttribute("src","img/relacionamento.png");
        imagem.setAttribute("width","300px");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a13.innerHTML = "";
        a14.innerHTML = "";

    }
    else if(valor==13) {
        texto.innerHTML = "Bibliografia";
        iframe.setAttribute("src","fontes.html");
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        a4.innerHTML = "";
        a5.innerHTML = "";
        a6.innerHTML = "";
        a7.innerHTML = "";
        a8.innerHTML = "";
        a9.innerHTML = "";
        a10.innerHTML = "";
        a11.innerHTML = "";
        a12.innerHTML = "";
        a14.innerHTML = "";

    }
   
}