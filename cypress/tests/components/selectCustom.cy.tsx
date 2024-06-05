import { ReactElement } from 'react';
import SelectCustom from '@components/selectCustom/selectCustom';
import { useForm } from 'react-hook-form';

type ItemsType = {
  value: any;
  label: string;
};

type WrappedType = {
  label?: string;
  name?: string;
  mandatory?: boolean;
  disabled?: boolean;
  iconLeft?: ReactElement;
  items?: ItemsType[];
};

const MountSelectCustom = ({
  label,
  name,
  disabled,
  iconLeft,
  items,
  mandatory,
}: WrappedType) => {
  const Wrapped = () => {
    const {
      control,
      formState: { errors },
    } = useForm<WrappedType>();
    return (
      <SelectCustom
        cyTestName="testSelectCustom"
        label={label ?? ''}
        control={control}
        name={name ?? ''}
        errors={errors}
        mandatory={mandatory}
        iconLeft={iconLeft}
        disabled={disabled}
        items={items ?? []}
      />
    );
  };
  cy.mount(<Wrapped />);
};

describe('<SelectCustom />', () => {
  it('renders', () => {
    MountSelectCustom({});
  });

  it('should have a label', () => {
    MountSelectCustom({ label: 'Teste' });
    cy.get('[data-cy="testSelectCustom"] > label').should('have.text', 'Teste');
  });

  it('should have a "*" symbol if mandatory is true', () => {
    MountSelectCustom({ label: 'Teste', mandatory: true });
    cy.get('[data-cy="testSelectCustom"] > label').should('have.text', 'Teste*');
  });

  it('should be disabled if is true', () => {
    MountSelectCustom({ disabled: true, label: 'Teste' });
    cy.get('[data-cy="testSelectCustom-base"]').should('have.css', 'background-color', 'rgb(246, 246, 246)');
  });

  it('should have a icon', () => {
    MountSelectCustom({ iconLeft: <div id="icon"></div> });
    cy.get('#icon').should('exist');
  });

  it('should render default placeholder', () => {
    MountSelectCustom({});
    cy.get('[data-cy="testSelectCustom-base"]').should("have.text", "Selecione");
  });

  it('should render options', () => {
    MountSelectCustom({ items: [{ value: 1, label: 'test1' }, { value: 2, label: 'test2' }], label: "sad", name: "test" });
    const container = '[data-cy="testSelectCustom"]';
    const baseInput = '[data-cy="testSelectCustom-base"]';
    const itemsContainer = '[data-cy="testSelectCustom-list"]';

    cy.get(container).click();
    cy.get(`${itemsContainer}`).should("exist");
    cy.get(`${itemsContainer} > :nth-child(1)`).should("have.text", "test1");
    cy.get(`${itemsContainer} > :nth-child(2)`).should("have.text", "test2");
    cy.get(`${itemsContainer} > :nth-child(1)`).click();
    cy.get(baseInput).should("not.have.text", "Selecione");
    cy.get(baseInput).should("have.text", 'test1');
  });

  it('should render default placeholder', () => {
    MountSelectCustom({ iconLeft: <div id="icon"></div> });
    cy.get('#icon').should('exist');
  });
});
