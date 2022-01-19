function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -  Number(fAno.value)
        var gen = ''
        var img = document.createElement('img') //Ele irá fazer uma tag img
        img.setAttribute('id', 'foto') // Equivale a mesma coisa no documento html
        
        if(fsex[0].checked){
            gen='Homem'
            if(idade>=0 && idade < 12){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if(idade < 59){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if(fsex[1].checked){
            gen='Mulher'
            if(idade>=0 && idade < 12){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if(idade < 59){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.innerHTML=`Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img) //Ele irá mostrar o conteúdo do elemento
        res.style.textAlign='center'
    }
}