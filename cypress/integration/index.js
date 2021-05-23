/// <reference types="cypress" />

context('Automated Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('loading shows by default', () => {
    it('loading shows', () => {
      cy.findByText('Loading...').should('exist')
    })
  })


  describe('opens track page', () => {
    it('finds track and clicks on it', () => {
      cy.findByText(/Metallica - Enter Sandman/i).should('exist')
      cy.findAllByText(/View Details/i).eq(0).should('exist').click()
      cy.findByText(/Metallica - Enter Sandman/i).should('exist')
      cy.findByText('Release Date: 29/07/1991').should('exist')
    })
  })

  describe('opens apple page', () => {
    it('finds apple and makes sure it has right url', () => {
      cy.findByText(/Metallica - Enter Sandman/i).should('exist')
      cy.findAllByText(/View Details/i).eq(0).should('exist').click()
      // new window breaks cypress testing, so just check the button exists and has the right url
      cy.get('a[href="https://music.apple.com/us/album/enter-sandman/579372950?i=579373079&uo=4"]').should('have.attr', 'target', '_blank')
    })
  })
})
