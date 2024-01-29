export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  private valorDeposito: number = 0

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (): void => {
    if(this.validateStatus()){
      console.log('Voce depositou')
    }
  }

  withdraw = (): void => {
    console.log('Voce sacou')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  setBalance = (valorDeposito): number => {
    this.balance += valorDeposito
    console.log('Valor depositado: ', valorDeposito)
    console.log('Saldo atualizado: ', this.getBalance())
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
