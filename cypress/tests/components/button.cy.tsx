import Button from '@components/button/button';

type props = {
  description?: string;
  maxWidth?: string;
  onClick?: () => void;
};

const MountButton = ({
  description,
  maxWidth,
  onClick
}: props) => {
  cy.mount(
    <Button
      description={description ?? ""}
      maxWidth={maxWidth ?? "32px"}
      onClick={onClick ?? (() => {})}
      cyTestName='button'
    />
  );
};

describe('shoud render', () => {
  it('renders', () => {
    MountButton({});
    cy.get('[data-cy="button"]').should("exist");
  });
  
  it("should be able to description into the button", () => {
    MountButton({
      description: 'Description'
    });
    cy.get('button').contains('Description');
  });
  
  it("should be able to action into the button", () => {
    MountButton({
      onClick: () => console.log("click")
    });
    cy.on('window:console', (consoleLog) => {
      if (consoleLog.message === 'click') {
        assert.isTrue(true);
      }
    });
  
    cy.get('button').click();
  });
})