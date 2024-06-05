import { ReactElement } from 'react';
import SelectMultiCustom from '@components/selectMultiCustom/selectMultiCustom';
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

const MountSelectMultiCustom = ({
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
      <SelectMultiCustom
        cyTestName="testSelectMultiCustom"
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

describe('<SelectMultiCustom />', () => {
  const dataCy = "[data-cy='testSelectMultiCustom']"
  const baseInput = '[data-cy="testSelectMultiCustom-base"]';
  const itemsContainer = '[data-cy="testSelectMultiCustom-list"]';

  it('renders', () => {
    MountSelectMultiCustom({});
  });

  it('should have a label', () => {
    MountSelectMultiCustom({ label: 'Teste' });
    cy.get(`${dataCy} > label`).should('have.text', 'Teste');
  });

  it('should have a "*" symbol if mandatory is true', () => {
    MountSelectMultiCustom({ mandatory: true, label: 'Teste' });
    cy.get(`${dataCy} > label`).should('have.text', 'Teste*');
  });

  it('should be disabled if is true', () => {
    MountSelectMultiCustom({ disabled: true });
    cy.get(`${baseInput}`).should('have.css', 'background-color', 'rgb(246, 246, 246)');
  });

  it('should have a icon', () => {
    MountSelectMultiCustom({ iconLeft: <div id="icon"></div> });
    cy.get('#icon').should('exist');
  });

  it('should render default placeholder', () => {
    MountSelectMultiCustom({});
    cy.get(baseInput).should("have.text", "Selecione");
  });

  it('should render options', () => {
    MountSelectMultiCustom({ items: [{ value: 1, label: 'test1' }, { value: 2, label: 'test2' }], label: "sad" });

    cy.get(dataCy).click();
    cy.get(`${itemsContainer}`).should("exist");
    cy.get(`${itemsContainer} > :nth-child(1)`).should("have.text", "test1");
    cy.get(`${itemsContainer} > :nth-child(2)`).should("have.text", "test2");
  });

  it('should render default placeholder', () => {
    MountSelectMultiCustom({ iconLeft: <div id="icon"></div> });
    cy.get('#icon').should('exist');
  });
});
