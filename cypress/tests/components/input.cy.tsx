import { UserIcon } from "@extensions/icons";
import Input from "@components/input/input";
import { FieldErrors, useForm } from "react-hook-form";
import { ReactElement } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { fields } from "@extensions/messages";
import { z } from "zod";

type HookFormType = {
  [key: string]: any;
};

type WrappedType = {
  placeholder?: string;
  mandatory?: boolean;
  maxLength?: number;
  minLength?: number;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  resolver?: any
  error?: FieldErrors<HookFormType>;
};

const MountInput = ({
  placeholder,
  mandatory,
  maxLength,
  iconLeft,
  iconRight,
  resolver,
  error,
}: WrappedType) => {
  const Wrapped = () => {
    const {
      control,
      formState: { errors },
    } = useForm<HookFormType>({
      resolver: zodResolver(resolver)
    });
    return (
      <Input
        cyTestName="testInput"
        label={"test Label"}
        control={control}
        name={"test"}
        errors={error ?? errors}
        placeholder={placeholder}
        mandatory={mandatory}
        maxLength={maxLength}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    );
  };
  cy.mount(<Wrapped />);
};

describe("<Input />", () => {
  it("renders", () => {
    MountInput({});
    cy.get('[data-cy="testInput"]').should("exist");
  });

  it("should be able to type into the input", () => {
    MountInput({});
    cy.get('[data-cy="testInput"]')
      .should("exist")
      .type("123123")
      .should("have.value", "123123");
  });

  it("should be able to type into and clear", () => {
    MountInput({});
    cy.get('[data-cy="testInput"]')
      .should("exist")
      .type("123123")
      .should("have.value", "123123")
      .clear()
      .should("not.have.value", "123123");
  });

  it("should have a label", () => {
    MountInput({});
    cy.contains("test Label").should("exist");
  });

  it('should have a "*" symbol if mandatory is true', () => {
    cy.contains("*").should("not.exist");
    MountInput({ mandatory: true });
    cy.contains("*").should("exist");
  });

  it("should be able to have a placeholder into it", () => {
    MountInput({
      placeholder: "test placeholder",
    });
    cy.get('input[placeholder="test placeholder"]').should("exist");
  });

  it("should be able to set the max length to input", () => {
    MountInput({
      maxLength: 5,
    });
    cy.get('[data-cy="testInput"]')
      .should("exist")
      .type("12345678910")
      .should("have.value", "12345");
  });

  it("should be able to set the left icon to input", () => {
    const userIcon = <div id="userIcon"><UserIcon height={'20px'} /></div>
    MountInput({
      iconLeft: userIcon,
    });
    cy.get('[id="userIcon"]').should('exist');
  });

  it("should be able to set the right icon to input", () => {
    const userIcon = <div id="userIcon"><UserIcon height={'20px'} /></div>
    MountInput({
      iconRight: userIcon,
    });
    cy.get('[id="userIcon"]').should('exist');
  });

  it("should be able to validate required fields", () => {
    const resolver = z.object({
      test: z.string()
      .min(1, fields.required)
    });
    const error: any = {
      test: {
        type: "required",
        message: fields.required
      }
    };
    MountInput({
      resolver: resolver,
      error: error
    });
    cy.get('[data-cy="testInput"]').should('exist');
    cy.get('[data-cy="testInput"]').type("t");
    cy.get('[data-cy="inputError"]').contains(fields.required);
  });

  it("should be able to validate email fields", () => {
    const resolver = z.object({
      test: z.string().email({ message: fields.email })
    });
    const error: any = {
      test: {
        type: "required",
        message: fields.email
      }
    };

    MountInput({
      resolver: resolver,
      error: error
    });
    cy.get('[data-cy="testInput"]').should('exist');
    cy.get('[data-cy="testInput"]').type("t");
    cy.get('[data-cy="inputError"]').contains(fields.email);
  });

  it("should be able to validate length fields", () => {
    const resolver = z.object({
      test: z.string()
      .max(200, fields.max(200))
    });
    const error: any = {
      test: {
        type: "required",
        message: fields.max(200)
      }
    };
    
    MountInput({
      resolver: resolver,
      error: error
    });
    cy.get('[data-cy="testInput"]').should('exist');
    cy.get('[data-cy="testInput"]').type("t");
    cy.get('[data-cy="inputError"]').contains(fields.max(200));
  });
});
