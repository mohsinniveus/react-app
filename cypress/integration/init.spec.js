describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })

    it('visits the app', () => {
        cy.visit('/')
        //cy.get('.action-btn').click() 
        cy.get ('.total').invoke("text")
            .then(initialTotal => {
                expect(initialTotal).to.eq("0");
            });

        cy.get('.action-btn').click()     
        cy.get ('.total').invoke("text")
            .then(initialTotal => {
                expect(initialTotal).to.eq("1");
            });
    })

  })