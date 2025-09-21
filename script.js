function amigos () {
    let inicio = document.getElementById (`rescomeco`)
    let antes = document.getElementById (`antes`)
    let img = document.getElementById (`foto-amigos`)
    let container = document.getElementById (`amigoss`)
    if (img) {
        inicio.removeChild(img)
        inicio.textContent = `como tudo começou...`
        antes.textContent = ``
        container.classList.remove(`caixa-amigos`)
    } else {
        inicio.textContent = `Nessa epoca eu e ela se beijava todo santo dia, mesmo não sendo namorados kkkskkk`
        img = document.createElement(`img`)
        img.setAttribute(`id`,`foto-amigos`)
        img.setAttribute(`src`,`comeco.jpg`)
        inicio.appendChild(img)
        antes.innerHTML = `eu era meio confuso, mas se eu soubesse que ela seria o amor da minha vida <br> eu te ria pedido ela em namoro no primeiro beijo`
        container.classList.add(`caixa-amigos`) 
    }

}

function apaixonados () {
    let titulo = document.getElementById (`resapaixonados`)
    let subtitulo = document.getElementById (`resapaixonados1`)
    let img = document.getElementById (`foto-apaixonados`)
    let container = document.getElementById (`apaixonadoss`)
    if (img) {
        titulo.removeChild (img)
        titulo.innerHTML = `o inicio depois de uma longa historia.`
        subtitulo.innerHTML = ``
        container.classList.remove(`caixa-apaixonados`)
    } else {
        titulo.textContent = `Aqui eu ja sabia que estava completamente apaixonado nela, mas tinha 'medo' tentei ignorar o que eu sentia por ela, mas não deu não.`
        img = document.createElement (`img`)
        img.setAttribute(`id`,`foto-apaixonados`)
        img.setAttribute(`src`,`apaixonados.jpg`)
        titulo.appendChild (img)
        subtitulo.innerHTML = `Criei coragem, e no dia no meu aniversario no dia 23/09/2022 <br> 
        pedi ela em namoro dentro da sala de aula, deveria ter feito algo mais romantico, eu sei.`
        container.classList.add (`caixa-apaixonados`)
    }
}

function Namorados() {
    let titulo = document.getElementById (`namoradoss`)
    let subtitulo = document.getElementById (`resnamorados`)
    let img = document.getElementById (`foto-namorados`)
    let csss = document.getElementById (`namoradosss`)
    if (img) {
        img.remove();
        titulo.innerHTML = `Eu to namorando?`
        subtitulo.innerHTML = ``
        csss.classList.remove(`caixa-namorados`)
    } else {
        csss.classList.add (`caixa-namorados`) 
        titulo.innerHTML = `Depois de fazer o pedido, e ela realmente ter aceitado, <br>
        eu so pensava uma coisa, 'EU TENHO UMA NAMORADA.' `
        img = document.createElement (`img`)
        img.setAttribute (`id`,`foto-namorados`)
        img.setAttribute (`src`,`namorados.jpg`)
        titulo.appendChild (img)
        subtitulo.innerHTML = `depois foi so alegria, muitos beijos, abraços e MUITO amor <br>
        mesmo eu e ela so podendo ficar no sofa, aproveitamos bastante essa fase dos primeiros meses `
    }
}

function Ano() {
    let titulo = document.getElementById (`resano`)
    let subtitulo = document.getElementById (`resano1`)
    let img = document.getElementById (`foto-ano`)
    let csss = document.getElementById (`priano`)
    if (img) {
        img.remove();
        titulo.innerHTML = `Primeiro ano together.`
        subtitulo.innerHTML = ``
        csss.classList.remove (`caixa-ano`)
    } else {
        csss.classList.add(`caixa-ano`)
        titulo.innerHTML = `Aqui eu e ela ja tinhamos quase terminado umas 2 vezes, kkk engraçado <br>
        passamos por muitas coisas nesse meio tempo, mas o nosso primeiro ano de namoro foi de muitos altos e baixos.`
        img = document.createElement (`img`)
        img.setAttribute (`id`,`foto-ano`)
        img.setAttribute (`src`,`ano.jpg`)
        titulo.appendChild (img)
        subtitulo.innerHTML = `Depois de um ano de namoro, eu e ela ja tinha aprendido muito sobre nois mesmos<br>
        mesmo nois sendo completamente diferentes um do outro, tava dando super certo.`
    }
} 

function ultimo() {
    let titulo = document.getElementById (`ultimo`)
    let sub = document.getElementById (`ultimo1`)
    let img = document.getElementById (`foto-ultimo`)
    let csss = document.getElementById (`ultimodia`)
    if (img) {
        img.remove();
        titulo.innerHTML = `Despedida...`
        sub.innerHTML = ``
        csss.classList.remove(`caixa-ultimo`)
    } else {
        csss.classList.add (`caixa-ultimo`)
        titulo.innerHTML = `depois mais de dois anos de namoro, eu decedi vim embora pra europa <br>
        essa foi a nossa ultima foto juntos.`
        img = document.createElement (`img`)
        img.setAttribute (`id`,`foto-ultimo`)
        img.setAttribute (`src`,`ultimafoto.jpg`)
        titulo.appendChild (img)
        sub.innerHTML = `agora ja tem mais de 3 anos de namoro<br>e falta poucas semanas para eu dar um abraço e um beijo nela.`
    }
}