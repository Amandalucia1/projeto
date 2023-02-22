/*A mudança de lado do botao e mudança de cor de fundo foi feito em CSS. No ID #SWITCH e  #switch button e .light #switch button alterou o lado do botao*/

    const button = document.getElementById('switch')
    button.addEventListener('click',togglemode)
    
    function togglemode() {

    /*if (body.classList.contains('light')) {
        body.classList.remove('light')
    }else{
        body.classList.add('light')
    }*/
    const body = document.body
    body.classList.toggle('light')/*Toggle substituiu o IF ELSE acima */
    const img = document.querySelector('#profile img')

    /**Mudando a imagem do profile */
    if (body.classList.contains('light')) {
        img.src = './assets/light.png'
        img.alt = 'Criança sorrindo'
        console.log(img)
    }else{
        img.src = './assets/ellipse.png'
        img.alt = 'Foto de Mayk Brito sorrindo'

    }
    
}


