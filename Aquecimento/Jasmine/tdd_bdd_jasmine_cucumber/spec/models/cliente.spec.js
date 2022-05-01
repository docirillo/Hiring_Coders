const Cliente = require('../../models/cliente');

describe('Clientes', () => {
  beforeEach(() => {});

  it('Retorna todos', () => {
    let clientes = Cliente.todos();
    expect(clientes.length).toEqual(10);
  });
  it('Retorna todos', () => {
    let cliente = Cliente.primeiro();
    expect(cliente.id).not.toBeUndefined();
    expect(cliente.nome).not.toBeUndefined();
    expect(cliente.telefone).not.toBeUndefined();
  });
});
