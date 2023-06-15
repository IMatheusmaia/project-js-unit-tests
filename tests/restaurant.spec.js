const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` retorna um objeto com a chave fetchMenu e se essa propriedade é uma função', () => {
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu()['fetchMenu']).toBe('function');
  });
  it('Verifica se o objeto retornado pela chave fetchMenu possui apenas duas propriedades food e drinks respectivamente', () => {
    expect(Object.keys(createMenu().fetchMenu())).toEqual(['food', 'drinks']);
  });
  it('Verifica se o menu passado como parâmetro na função é recuperado na saída da função createMenu().fetchMenu()', () => {
    expect(createMenu({ coxinha: 3.9 }, { agua: 3.9 } ).fetchMenu()).toEqual({ food: { coxinha: 3.9 }, drinks: { agua: 3.9 } })
  });
  it('Verifica se ao chamar a função createMenu, a propriedade consumption do objeto de retorno tem o valor de um array vazio', () => {
    expect(createMenu()).toHaveProperty('consumption',[]);
  });
  it('Verificar se a mensagem de "item indisponível" é retornada quando o parâmetro passado na função ordem não corresponde a nenhuma propriedade de objeto e retorna corretamente o item quando existe a propriedade', () => {
    expect(createMenu({ coxinha: 3.90, sanduiche: 9.90 }, { agua: 3.90, cerveja: 6.90 }).order('empada')).toBe('Item indisponível');
    expect(createMenu({ coxinha: 3.90, sanduiche: 9.90 }, { agua: 3.90, cerveja: 6.90 }).order('cerveja')).toEqual(['cerveja']);
  });
});
