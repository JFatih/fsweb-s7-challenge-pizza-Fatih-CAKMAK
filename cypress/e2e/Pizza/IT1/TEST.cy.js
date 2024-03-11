describe("Pizza Formu Testleri", () => {
  it("Seçilen Ek malzemeler 10 dan fazla ise  button aktif değildir", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='OrderPage-Button']").click();
    cy.url().should("include", "/OrderPizza");
  });
  it("Bütün bilgiler doğru giriliyor, Submit çalışıyor", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-boyut']").first().click();
    cy.get("[data-cy='data-kalınlık']").first().click({ force: true });
    cy.get("[data-cy='input-malzemeler']").eq(0).click();
    cy.get("[data-cy='input-malzemeler']").eq(1).click();
    cy.get("[data-cy='input-malzemeler']").eq(2).click();
    cy.get("[data-cy='input-malzemeler']").eq(3).click();
    cy.get("[data-cy='input-ad']").type("Fatih");
    cy.get("[data-cy='input-soyad']").type("ÇAKMAK");
    cy.get("[data-cy='submit-button']").should("be.enabled");
  });
  it("Boyut seçilmezse button aktif değildir", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-kalınlık']").first().click({ force: true });
    cy.get("[data-cy='input-malzemeler']").eq(0).click();
    cy.get("[data-cy='input-malzemeler']").eq(1).click();
    cy.get("[data-cy='input-malzemeler']").eq(2).click();
    cy.get("[data-cy='input-malzemeler']").eq(3).click();
    cy.get("[data-cy='input-ad']").type("Fatih");
    cy.get("[data-cy='input-soyad']").type("ÇAKMAK");
    cy.get("[data-cy='submit-button']").should("be.disabled");
  });
  it("Pizza Kalınlığı seçilmezse button aktif değildir", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-boyut']").first().click();
    cy.get("[data-cy='input-malzemeler']").eq(0).click();
    cy.get("[data-cy='input-malzemeler']").eq(1).click();
    cy.get("[data-cy='input-malzemeler']").eq(2).click();
    cy.get("[data-cy='input-malzemeler']").eq(3).click();
    cy.get("[data-cy='input-ad']").type("Fatih");
    cy.get("[data-cy='input-soyad']").type("ÇAKMAK");
    cy.get("[data-cy='submit-button']").should("be.disabled");
  });
  it("Seçilen Ek malzemeler 4 den az ise  button aktif değildir", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-boyut']").first().click();
    cy.get("[data-cy='data-kalınlık']").first().click({ force: true });
    for (let i = 0; i < 3; i++) {
      cy.get("[data-cy='input-malzemeler']").eq(i).click();
    }
    cy.get("[data-cy='input-ad']").type("Fatih");
    cy.get("[data-cy='input-soyad']").type("ÇAKMAK");
    cy.get("[data-cy='submit-button']").should("be.disabled");
  });
  it("Seçilen Ek malzemeler 10 dan fazla ise  button aktif değildir", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-boyut']").first().click();
    cy.get("[data-cy='data-kalınlık']").first().click({ force: true });
    for (let i = 0; i < 11; i++) {
      cy.get("[data-cy='input-malzemeler']").eq(i).click();
    }
    cy.get("[data-cy='input-ad']").type("Fatih");
    cy.get("[data-cy='input-soyad']").type("ÇAKMAK");
    cy.get("[data-cy='submit-button']").should("be.disabled");
  });
  it("Girilen Ad 3 karakterden az ise button aktif değildir", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-boyut']").first().click();
    cy.get("[data-cy='data-kalınlık']").first().click({ force: true });
    for (let i = 0; i < 4; i++) {
      cy.get("[data-cy='input-malzemeler']").eq(i).click();
    }
    cy.get("[data-cy='input-ad']").type("Fa");
    cy.get("[data-cy='input-soyad']").type("ÇAKMAK");
    cy.get("[data-cy='submit-button']").should("be.disabled");
  });
  it("Girilen Soyad 3 karakterden az ise button aktif değildir", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-boyut']").first().click();
    cy.get("[data-cy='data-kalınlık']").first().click({ force: true });
    for (let i = 0; i < 4; i++) {
      cy.get("[data-cy='input-malzemeler']").eq(i).click();
    }
    cy.get("[data-cy='input-ad']").type("Fatih");
    cy.get("[data-cy='input-soyad']").type("CA");
    cy.get("[data-cy='submit-button']").should("be.disabled");
  });
  it("Bütün bilgiler doğru giriliyor, Submit edilince Sipariş onay sayfasına geçiyor", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-boyut']").first().click();
    cy.get("[data-cy='data-kalınlık']").first().click({ force: true });
    cy.get("[data-cy='input-malzemeler']").eq(0).click();
    cy.get("[data-cy='input-malzemeler']").eq(1).click();
    cy.get("[data-cy='input-malzemeler']").eq(2).click();
    cy.get("[data-cy='input-malzemeler']").eq(3).click();
    cy.get("[data-cy='input-ad']").type("Fatih");
    cy.get("[data-cy='input-soyad']").type("ÇAKMAK");
    cy.get("[data-cy='submit-button']").click();
    cy.url().should("include", "/SuccessPage");
  });
  it("Bütün bilgiler doğru giriliyor, Submit edilince Sipariş onay sayfasına geçiyor", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-boyut']").first().click();
    cy.get("[data-cy='data-kalınlık']").first().click({ force: true });
    cy.get("[data-cy='input-malzemeler']").eq(0).click();
    cy.get("[data-cy='input-malzemeler']").eq(1).click();
    cy.get("[data-cy='input-malzemeler']").eq(2).click();
    cy.get("[data-cy='input-malzemeler']").eq(3).click();
    cy.get("[data-cy='input-ad']").type("Fatih");
    cy.get("[data-cy='input-soyad']").type("ÇAKMAK");
    cy.get("[data-cy='submit-button']").click();
  });
  it("Submit edilince Consolda Sipariş bilgileri loglanıyor", () => {
    cy.visit("http://localhost:5173/OrderPizza");
    cy.get("[data-cy='data-boyut']").first().click();
    cy.get("[data-cy='data-kalınlık']").first().click({ force: true });
    cy.get("[data-cy='input-malzemeler']").eq(0).click();
    cy.get("[data-cy='input-malzemeler']").eq(1).click();
    cy.get("[data-cy='input-malzemeler']").eq(2).click();
    cy.get("[data-cy='input-malzemeler']").eq(3).click();
    cy.get("[data-cy='input-ad']").type("Fatih");
    cy.get("[data-cy='input-soyad']").type("ÇAKMAK");
    cy.get("[data-cy='submit-button']").click();
    cy.wait(1000);
    cy.log(Cypress.$("#orderForm").val());
  });
});
