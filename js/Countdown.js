// Esta classe faz a contagem regressiva em dias, horas, minutos e segundos
// Para criar objetos do tipo Countdown, deve-se passar uma data como parâmetro no formato de data do JS
// Ex: const dataFutura = new Countdown('07 April 2023');

export default class Countdown {
  constructor(dataFutura) {
    this.dataFutura = dataFutura;
  }

  //pega a data do sistema
  get _dataAtual() {
    return new Date();
  }

  //transforma a data passada na criação do objeto em formato completo de JS
  get _dataFutura() {
    return new Date(this.dataFutura);
  }

  //pega a diferença, em milissegundos, entre a data futura e a data atual do sistema
  get _dataDiferenca() {
    return this._dataFutura.getTime() - this._dataAtual.getTime();
  }

  //retorna a diferença em dias
  get dias() {
    const dias = this._dataDiferenca / (1000 * 60 * 60 * 24);
    return Math.floor(dias);
  }

  //retorna a diferença em horas
  get horas() {
    const horas = this._dataDiferenca / (1000 * 60 * 60);
    return Math.floor(horas);
  }

  //retorna a diferença em minutos
  get minutos() {
    const minutos = this._dataDiferenca / (1000 * 60);
    return Math.floor(minutos);
  }

  //retorna a diferença em segundos
  get segundos() {
    const segundos = this._dataDiferenca / 1000;
    return Math.floor(segundos);
  }

  //retorna um objeto com dias, horas, minutos e segundos que faltam para a data futura informada
  //Ex: cálculo das horas -> pega o resto da divisão das horas totais por 24h (1 dia)
  get total() {
    const dias = this.dias;
    const horas = this.horas % 24;
    const minutos = this.minutos % 60;
    const segundos = this.segundos % 60;
    return {
      dias,
      horas,
      minutos,
      segundos,
    };
  }
}
