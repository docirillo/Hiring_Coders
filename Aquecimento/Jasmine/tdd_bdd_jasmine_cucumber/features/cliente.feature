Feature: Clients
  Scenario: "List of clients"
    Given I have {10} clientes in my database
    When I access the home webpage
    Then I see the list of {10} itens