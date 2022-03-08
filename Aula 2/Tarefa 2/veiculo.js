class Veiculo{
    placa;
    ano;

    constructor(placa, ano){
        this.placa = placa;
        this.ano = ano;
    }

    setPlaca(novaPlaca){
        this.placa = novaPlaca;
    }

    setAno(novaAno){
        this.ano = novaAno;
    }

    getPlaca(){
        return this.placa
    }

    getAno(){
        return this.ano
    }

    showInfo(){
        console.log("Placa", this.placa);
        console.log("Ano", this.ano);
    }
}

var veiculo = new Veiculo();
veiculo.setAno('2000');
veiculo.setPlaca('KJH-2900');
veiculo.showInfo();