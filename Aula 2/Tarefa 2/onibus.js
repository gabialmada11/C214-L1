class Onibus extends Veiculo{
    assento;

    constructor(placa, ano, assento){
        super(placa, ano);
        this.assento = assento;
    }

    introduzir(){
        console.log('Olá, a placa é', this.placa, 'do ano', this.ano, 'do assento', this.assento);
    }

    setAssento(novoAssento){
        this.assento = novoAssento;
    }

    getAssento(){
        return this.assento
    }

    showInfo(){
        console.log("Placa", this.placa);
        console.log("Ano", this.ano);
    }

}

const novoOnibus = new Onibus('PLA-0980', 1909, 15);
novoOnibus.introduzir();
