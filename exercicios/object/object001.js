let amigo = {nome: 'José', sexo:'M', peso:'70.5', engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(8)
console.log(`${amigo.nome} pesa ${amigo.peso}`)