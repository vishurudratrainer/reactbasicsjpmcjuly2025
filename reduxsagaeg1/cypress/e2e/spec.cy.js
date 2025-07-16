describe('test redux saga application', () => {
  it('does the page load', () => {
    cy.visit('http://localhost:3000/')
  })

  it('test todos', () => {
    cy.visit('http://localhost:3000/')
    cy.get("#fetchtodo").click()
    cy.get("#todooutput").contains("delectus ")
    cy.get("#root > div > header > div > a:nth-child(5)").click()
    cy.get("#root > div > header > div > div > form > label:nth-child(1) > input").type("hello")
    cy.get("#root > div > header > div > div > form > label:nth-child(3) > input").type("fello")
    cy.get("#root > div > header > div > div > form > label:nth-child(5) > input").type("1")
    cy.get("#root > div > header > div > div > form > button").click()
    cy.get("#root > div > header > div > div > h1").contains("101")
  })
})