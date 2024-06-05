import { useForm } from 'react-hook-form';
import Check from '@components/check/check';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

// #region - types

const resolver = z.object({
  test: z.boolean(),
});

type ResolverType = z.infer<typeof resolver>;

export type CheckPropsType = {
  disabled?: boolean;
  isReactHookForm?: boolean;
};

// #endregion

const MountCheck = ({
  disabled,
  isReactHookForm,
}: CheckPropsType) => {
  const Wrapped = () => {
    const [value, setValue] = useState<any>(false);
    const {
      control,
      formState: { errors },
    } = useForm<ResolverType>({
      defaultValues: {
        test: true
      },
      resolver: zodResolver(resolver)
    });

    return (
      <Check
        cyTestName="testCheck"
        name={"test"}
        control={!!isReactHookForm && control}
        errors={!!isReactHookForm && errors}
        value={value}
        change={!!isReactHookForm ? undefined : setValue}
        disabled={disabled}
      />
    );
  };
  cy.mount(<Wrapped />);
};

describe('<Check />', () => {
  const container = '[data-cy="testCheck"]';
  const containerToClick = `[data-cy="testCheck-checkbox"]`;

  it('renders', () => {
    MountCheck({});
  });

  it('should be render hook form value', () => {
    MountCheck({
      isReactHookForm: true
    });
    cy.get('[data-cy="testCheck"] input').should('be.checked');
  });

  it('should be change hook form value by click', () => {
    MountCheck({
      isReactHookForm: true
    });
    cy.get(`${container} input`).should('be.checked');
    cy.get(`${containerToClick}`).click();
    cy.get(`${container} input`).should('not.be.checked');
  });
  
  it('should be render useState value', () => {
    MountCheck({
      isReactHookForm: false
    });
    cy.get(`${container} input`).should('not.be.checked');
  });

  it('should be change useState value by click', () => {
    MountCheck({
      isReactHookForm: false
    });
    cy.get(`${container} input`).should('not.be.checked');
    cy.get(`${containerToClick}`).click();
    cy.get(`${container} input`).should('be.checked');
  });
  
  it('should be disabled', () => {
    MountCheck({
      disabled: true,
    });
    cy.get(`${container} input`).should('be.disabled');
  });
});

