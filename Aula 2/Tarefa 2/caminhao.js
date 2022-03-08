class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano, eixos){
        super(placa, ano);
        this.eixos = eixos;
    }

    setEixos(novoEixo){
        this.eixos = novoEixo;
    }

    getEixos(){
        return this.eixos
    }

    showInfo(){
        console.log("Placa", this.placa);
        console.log("Ano", this.ano);
        console.log("Eixos", this.eixos);
    }
}

var caminhao = new Caminhao();
caminhao.setAno('2009');
caminhao.setPlaca('GTO-2080');
caminhao.setEixos('4');
caminhao.showInfo();
