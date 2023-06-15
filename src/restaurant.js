const createMenu = (comidas, bebidas) => {
    const objectFD = { food: Object(comidas), 
        drinks: Object(bebidas),
    };
    const menu = { 
        fetchMenu: () => objectFD,
        consumption: [],
        order: (pedido) => {
            const foodKeys = Object.keys(objectFD.food);
            const drinksKeys = Object.keys(objectFD.drinks);
            const keysObjFD = foodKeys.concat(drinksKeys);
            
           const find = keysObjFD.find((element) => element === pedido);
           if (typeof find === 'string') { 
            menu.consumption.push(find);

            return menu.consumption;
        } 
            return 'Item indisponível';
        },
    };
    return menu;
};
createMenu({ coxinha: 3.90, sanduiche: 9.90 }, { agua: 3.90, cerveja: 6.90 }).order('coxinha');

module.exports = createMenu;