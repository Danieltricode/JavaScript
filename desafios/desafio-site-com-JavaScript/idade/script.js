function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        res.innerHTML = 'Encontramos um erro, preencha novamente os dados.'
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value)
        var genero = ''
        var img = document.querySelector('p#emoji')
        // var img = document.createElement('img')
        // img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'        
        } else if (sexo[1].checked) {
            genero = 'Mulher'  
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    }
}