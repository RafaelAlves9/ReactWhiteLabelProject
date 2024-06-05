import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Switch from '@components/switch/switch';

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

const MountSwitch = ({
  disabled,
  isReactHookForm = false,
}: CheckPropsType) => {
  const Wrapped = () => {
    const [value, setValue] = useState<boolean>(false);
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
      <Switch
        cyTestName="testSwitch"
        name="test"
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

describe('<Switch />', () => {
  const container = '[data-cy="testSwitch"]';

  it('renders', () => {
    MountSwitch({});
  });

  it('should be render hook form value', () => {
    MountSwitch({
      isReactHookForm: true,
    });
    cy.get(`${container} input`).should('be.checked');
  });

  it('should be change hook form value by click', () => {
    MountSwitch({
      isReactHookForm: true
    });
    cy.get(`${container} input`).should('be.checked');
    cy.get(`${container} .slider`).click();
    cy.get(`${container} input`).should('not.be.checked');
  });
  
  it('should be render useState value', () => {
    MountSwitch({
      isReactHookForm: false
    });
    cy.get(`${container} input`).should('not.be.checked');
  });

  it('should be change useState value by click', () => {
    MountSwitch({
      isReactHookForm: false
    });
    cy.get(`${container} input`).should('not.be.checked');
    cy.get(`${container} .slider`).click();
    cy.get(`${container} input`).should('be.checked');
  });
  
  it('should be disabled', () => {
    MountSwitch({
      disabled: true,
    });
    cy.get(`${container} input`).should('be.disabled');
  });
});
