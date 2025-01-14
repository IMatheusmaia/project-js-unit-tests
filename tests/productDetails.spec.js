const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails()).toBe('object');
    expect(Array.isArray(productDetails())).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(Array.from(productDetails('Alcool gel', 'Máscara')).some((element) => typeof element !== 'object')).toBe(false);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Alcool gel')).not.toMatchObject(productDetails('Alcool gel', 'Máscara'));
    // Teste se os dois productIds terminam com 123.
    const retorno = productDetails('Alcool gel', 'Máscara');
    const product = retorno.map((obj) => {
    const { details } = obj;
    const { productId } = details;
    return productId;
    });
    expect(product.map((element) => element.endsWith('123'))).toEqual([true, true]);
  });
});
