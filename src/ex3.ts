/*3. Dado o seguinte diagrama:

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal.*/


class Animal {

    constructor (public cor: string, public porte: string, public idade: number ){
        
    }
}

class Cachorro extends Animal{
    latir(){
        console.log(`Cor ${this.cor}, this.porte, this.idade`);
        
        console.log("au, au, au");
        
    }
}

class Cavalo extends Animal {
    relinchar(){
        console.log("iiiiiiiiiiiihhhhhoooooo");
        
    }
}

class Gato extends Animal {
    miar(){
        console.log("miau, miau, miau");
        
    }
}

export class Exercicio3{
    constructor(){
        console.log("Exercicio 3");

        const cachorro = new Cachorro("preto", "médio", 3);
        cachorro.latir()

        const cavalo = new Cavalo("branco", "grande", 8);
        cavalo.relinchar()

        const gato = new Gato("malhado", "pequeno", 1);
        gato.miar()
        
    }
}