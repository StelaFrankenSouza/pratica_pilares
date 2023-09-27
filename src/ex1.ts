/*1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional.*/


abstract class Ingresso{
    protected valor = 10;

    imprimeValor(){
        console.log(this.valor);
    }
}

class Normal extends Ingresso {
    imprimeValor(){
        console.log("Normal:" , this.valor);
        
    }
}

class Vip extends Ingresso{
    private valorAdicional = 10;

    imprimeValor(){
        console.log("VIP:" , this.valor + this.valorAdicional);
        
    }
}

class Camarote extends Ingresso {
    private valorAdicional = 20;

    imprimeValor(){
        console.log("Camarote:" , this.valor + this.valorAdicional);
        
    }
}

export class Exercicio1{
    constructor(){
        console.log("Exercicio 1");

        let normal = new Normal();
        normal.imprimeValor()

        let vip = new Vip()
        vip.imprimeValor()

        let camarote = new Camarote()
        camarote.imprimeValor()
        
    }
}