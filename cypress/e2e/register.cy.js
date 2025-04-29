describe('Login Test', () => {
    it('should register in successfully', () => {
      cy.visit('http://localhost:8000/register');  // Az alkalmazásod login oldalát látogatja meg
      cy.get('input[name=name]').type('test');  // Kitölti az email mezőt
      cy.get('input[name=email]').type('pantyapetra16@gmail.com');  // Kitölti az email mezőt
      cy.get('input[name=password]').type('Passw1234');  // Kitölti a jelszó mezőt
      cy.get('input[name=password_confirmation]').type('Passw1234');  // Kitölti a jelszó ellenőrzést
      //cy.get('button[name=login]').click();  // Rákattint a bejelentkezés gombra
      cy.contains('button', 'Regisztráció').click();  // Rákattint a bejelentkezés gombra      
      cy.get('p').should(($p) => {
        expect($p.first()).to.contain('The email has already been taken.')

      });
    });
  });
