function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    let img = document.querySelector('#imagem')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img') //cria um img
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade <= 4) {
                //bebe
                img.src = "imagens-m/homem-bebe.png"
            } else if (idade < 10) {
                //criança
                img.src = "imagens-m/homem-crianca.png"
            } else if (idade < 18) {
                //adolescente
                img.src = "imagens-m/homem-adolescente.png"
            } else if (idade >= 18 && idade < 50) {
                //adulto
                img.src = "imagens-m/homem-adulto.png"
            } else {
                //idoso
                img.src = "imagens-m/homem-idoso.png"
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade <= 4) {
                //bebe
                img.src = "imagens-f/mulher-bebe.png"
            } else if (idade < 10) {
                //criança
                img.src = "imagens-f/mulher-crianca.png"
            } else if (idade < 18) {
                //adolescente
                img.src = "imagens-f/mulher-adolescente.png"
            } else if (idade >= 18 && idade < 50) {
                //adulta
                img.src = "imagens-f/mulher-adulta.png"   
            } else {
                //idosa
                img.src = "imagens-f/mulher-idosa.png"
            }
        }
        res.style.textAlign = 'center' //centraliza o texto de resposta.
        res.innerHTML = ""; //limpando o conteúdo antes de adicionar o novo
        res.appendChild(img);
        const text = document.createElement("p");
        text.classList.add("text");
        text.innerText = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(text);
    }
}

