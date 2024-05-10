let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []


function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { // só vai aceitar valores entre 0 e 100
        return true 
    }else {
        return false 
    }
}


function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { // -1 indica que não é encontrado, nesse caso, na lista
        return true
    }else {
        return false
    }
}


function adicionar() {
    if(isNumber(num.value) && !inLista(num.value, valores)) { // se o número for realmente um número, e se esse número não está na lista (! em javascript quer dizer NÃO)
        valores.push(Number(num.value)) // adicionar um elemento no vetor
        let item = document.createElement('option') // criou um elemento que vai possibilitar de colocar o elemento dentro de select
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) // pra adicionar o item na lista
        res.innerHTML = '' // isto é, quando adicionar outro elemento, ele precisa limpar o resultado 
    }else {
        alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()
}


function finalizar() {
    if(valores.length == 0) { // lê-se: se o vetor estiver vazio
        alert('Adicione valores antes de finalizar!')
    }else {
        let tot = valores.length // para saber quantos elementos há no vetor
        let maior = valores[0] // o maior número (se apenas ter um), ele mesmo é o maior
        let menor = valores[0] // o menor número (se apenas ter um), ele mesmo é o menor
        let soma = 0
        let media = 0

        for(let pos in valores) { // pra cada posição em valores
            soma += valores[pos] // somar os valores inseridos
            if(valores[pos] > maior )
                maior = valores[pos]

            if(valores[pos] < menor )
                menor = valores[pos] 
            
            // o for vai identificar um por um qual dos números é o maior e menor, que foram inseridos
        }

        media = soma / tot // isto é, a soma dos elementos (números), dividido pelo total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}