describe('Login Test', () => {
    it('should log in successfully', () => {
      cy.visit('http://localhost:8000/login');  // Az alkalmazásod login oldalát látogatja meg
      cy.get('input[name=email]').type('pantyapetra16@gmail.com');  // Kitölti az email mezőt
      cy.get('input[name=password]').type('Passw123');  // Kitölti a jelszó mezőt
      //cy.get('button[name=login]').click();  // Rákattint a bejelentkezés gombra
      cy.contains('button', 'Bejelentkezés').click();  // Rákattint a bejelentkezés gombra
      cy.url().should('include', '/dashboard');  // Ellenőrzi, hogy a dashboard-ra jutott
    });
  });
