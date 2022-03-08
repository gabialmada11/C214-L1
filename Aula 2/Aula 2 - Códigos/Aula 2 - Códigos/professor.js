class Professor extends Pessoa{
    disciplina;

    constructor(nome, idade, disciplina){
        super(nome, idade);//usar super qnd for pegar os dados da classe extendida (pessoa)
        this.disciplina = disciplina;
    }

    introduzir(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, e vou lecionar ${this.disciplina}`);
    }

    grau(){
        const grau = Math.floor(Math.random() * (5 - 1) + 1); 
        console.log('Grau:', grau);
    }
}

const phyll = new Professor('Phyll', 26, 'Eng Software');
phyll.introduzir();
phyll.grau();