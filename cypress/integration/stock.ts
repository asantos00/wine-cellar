import { Server } from 'miragejs';
import { makeServer } from '../../makeServer';

describe('Stock', () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer({ environment: 'test '});
  })

  afterEach(() => {
    server.shutdown();
  })

  it('renders the homepage with stock', () => {
    cy.visit('/');

    expect(cy.contains('Wine Cellar')).to.exist;
    expect(cy.contains('Stock')).to.exist;
  });

  it('renders wine names', () => {
    cy.visit('/');

    server.get('/wines', () => [
      { name: 'Pomares', year: 2018 },
      { name: 'Grainha', year: 2017 },
    ])

    expect(cy.contains('Pomares 2018')).to.exist;
    expect(cy.contains('Grainha 2017')).to.exist;
  })
})
