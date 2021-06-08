const search = async() =>{
    document.querySelector('.resultado').innerHTML = ''
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => res.json())
    for (let i = 0; i < response.drinks.length; i++) {
        // criação das strings e foto
        let drink = response.drinks
        
        let nome = document.createElement('p')
        let foto = document.createElement('img')
        let categoria = document.createElement('p')
        let copo = document.createElement('p')
        let instruçoes = document.createElement('p')
        let ingredientes = document.createElement('p')  

        // apender informações nos elementos criados
        
        nome.append(drink[i].strDrink)
        foto.setAttribute('src', drink[i].strDrinkThumb)
        categoria.append(drink[i].strCategory)
        copo.append(drink[i].strGlass)
        instruçoes.append(drink[i].strInstructions)

        //condições ingredientes

        if (drink[i].strIngredient1 != null && drink[i].strMeasure1 != null) {
            ingredientes.append(drink[i].strIngredient1 + ' ')
            ingredientes.append(drink[i].strMeasure1 + ', ')
        }
        if (drink[i].strIngredient2 != null && drink[i].strMeasure2 != null) {
            ingredientes.append(drink[i].strIngredient2 + ' ')
            ingredientes.append(drink[i].strMeasure2 + ', ')
        }
        if (drink[i].strIngredient3 != null && drink[i].strMeasure3 != null) {
            ingredientes.append(drink[i].strIngredient3 + ' ')
            ingredientes.append(drink[i].strMeasure3 + ', ')
        }
        if (drink[i].strIngredient4 != null && drink[i].strMeasure4 != null) {
            ingredientes.append(drink[i].strIngredient4 + ' ')
            ingredientes.append(drink[i].strMeasure4 + ', ')
        }
        if (drink[i].strIngredient5 != null && drink[i].strMeasure5 != null) {
            ingredientes.append(drink[i].strIngredient5 + ' ')
            ingredientes.append(drink[i].strMeasure5 + ', ')
        }
        if (drink[i].strIngredient6 != null && drink[i].strMeasure6 != null) {
            ingredientes.append(drink[i].strIngredient6 + ' ')
            ingredientes.append(drink[i].strMeasure6 + ', ')
        }
        if (drink[i].strIngredient7 != null && drink[i].strMeasure7 != null) {
            ingredientes.append(drink[i].strIngredient7 + ' ')
            ingredientes.append(drink[i].strMeasure7 + ', ')
        }
        if (drink[i].strIngredient8 != null && drink[i].strMeasure8 != null) {
            ingredientes.append(drink[i].strIngredient8 + ' ')
            ingredientes.append(drink[i].strMeasure8 + ', ')
        }
        if (drink[i].strIngredient9 != null && drink[i].strMeasure9 != null) {
            ingredientes.append(drink[i].strIngredient9 + ' ')
            ingredientes.append(drink[i].strMeasure9 + ', ')
        }
        if (drink[i].strIngredient10 != null && drink[i].strMeasure10 != null) {
            ingredientes.append(drink[i].strIngredient10 + ' ')
            ingredientes.append(drink[i].strMeasure10 + ', ')
        }
        if (drink[i].strIngredient11 != null && drink[i].strMeasure11 != null) {
            ingredientes.append(drink[i].strIngredient11 + ' ')
            ingredientes.append(drink[i].strMeasure11 + ', ')
        }
        if (drink[i].strIngredient12 != null && drink[i].strMeasure12 != null) {
            ingredientes.append(drink[i].strIngredient12 + ' ')
            ingredientes.append(drink[i].strMeasure12 + ', ')
        }
        if (drink[i].strIngredient13 != null && drink[i].strMeasure13 != null) {
            ingredientes.append(drink[i].strIngredient13 + ' ')
            ingredientes.append(drink[i].strMeasure13 + ', ')
        }
        if (drink[i].strIngredient14 != null && drink[i].strMeasure14 != null) {
            ingredientes.append(drink[i].strIngredient14 + ' ')
            ingredientes.append(drink[i].strMeasure14 + ', ')
        }
        if (drink[i].strIngredient15 != null && drink[i].strMeasure15 != null) {
            ingredientes.append(drink[i].strIngredient15 + ' ')
            ingredientes.append(drink[i].strMeasure15 + ', ')
        }
        
        // apender informações dentro de uma div
        const div = document.createElement('div')
        div.setAttribute('class', 'Info')
        div.append(nome, foto, categoria, copo, instruçoes, ingredientes)  

        // apender no html
        document.querySelector('.resultado').append(div)

    }
}