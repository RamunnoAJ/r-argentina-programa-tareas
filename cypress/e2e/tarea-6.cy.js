/// <reference types="Cypress"  />

const URL = 'http://127.0.0.1:8080/clase-6/tarea-clase-6.html'

context('Formulario de familias', () => {
  beforeEach(() => {
    cy.visit(URL)
  })

  describe('Verifica que se muestre la pantalla inicial', () => {
    it('se asegura que el título sea visible', () => {
      cy.get('#titulo').should('be.visible')
    })

    it('se asegura que el input para ingresar los miembros de la familia sea visible', () => {
      cy.get('#miembros-familia').should('be.visible')
    })

    it('se asegura que el botón de siguiente se renderice', () => {
      cy.get('#boton-siguiente').should('be.visible')
    })

    it('se asegura que el botón siguiente de un error con un valor vacío', () => {
      cy.get('#boton-siguiente').click()
      cy.get('#miembros-familia').should('have.class', 'error')
    })

    it('se asegura que al ingresar un valor y clickear siguiente, aparezcan los botones correspondientes', () => {
      cy.get('#miembros-familia').type(1)
      cy.get('#boton-siguiente').click()

      cy.get('.miembros').should('have.length', 1)
      cy.get('#calcular').should('be.visible')
      cy.get('#limpiar').should('be.visible')
    })

    it('se asegura que al clickear el botón de limpiar, se borren los miembros', () => {
      cy.get('#miembros-familia').type(1)
      cy.get('#boton-siguiente').click()

      cy.get('#limpiar').click()
      cy.get('.miembros').should('not.be.visible')
    })
  })

  describe('Verifica que la aplicación ande', () => {
    it('se asegura que crea 4 inputs funcionales al ingresar 4 miembros', () => {
      cy.get('#miembros-familia').type('4')
      cy.get('#boton-siguiente').click()
      cy.get('.miembro').should('have.length', 4)

      cy.get('.miembro').eq(0).type('10')
      cy.get('.miembro').eq(1).type('20')
      cy.get('.miembro').eq(2).type('25')
      cy.get('.miembro').eq(3).type('30')

      cy.get('#calcular').click()

      cy.get('#mayor-edad').should('have.text', '30')
      cy.get('#menor-edad').should('have.text', '10')
      cy.get('#edad-promedio').should('have.text', '21.25')
    })
  })
})
