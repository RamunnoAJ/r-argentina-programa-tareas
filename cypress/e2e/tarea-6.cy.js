const URL = 'http://127.0.0.1:8080/clase-6/tarea-clase-6.html'

describe('template spec', () => {
  it('passes', () => {
    cy.visit(URL)
  })
})
