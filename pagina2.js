const search = async(param) =>{
    document.querySelector('.resultado').innerHTML = ''
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${param}`).then(res => res.json())
    for (let i = 0; i < response.drinks.length; i++) {
        // criação das strings e foto
        let drink = response.drinks
        let id = document.createElement('p')
        let nome = document.createElement('p')
        let alcoolico = document.createElement('p')
        let foto = document.createElement('img')

        // apender informações nos elementos criados
        id.append(drink[i].idDrink)
        nome.append(drink[i].strDrink)
        alcoolico.append(drink[i].strAlcoholic)
        foto.setAttribute('src', drink[i].strDrinkThumb)

        // apender informações dentro de uma div
        const div = document.createElement('div')
        div.setAttribute('class', 'bebidaInfo')
        div.append(id, nome, alcoolico, foto)
        div.setAttribute('id', drink[i].idDrink)
        div.setAttribute('onclick', 'bebidaInfo(this.id)')
        
        // apender no html
        document.querySelector('.resultado').append(div)
    }
}