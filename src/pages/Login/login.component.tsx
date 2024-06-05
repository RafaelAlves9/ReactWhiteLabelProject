import { UseLoginControllerProps } from "./login.types";
import { Card, Container, ForgotPasswordAction, TitleContainer } from "./login.styles";
import Input from "@components/input/input";
import Button from "@components/button/button";
import { EyesCloseIcon, EyesOpenIcon, LockInIcon, UserIcon } from "@extensions/icons";

const LoginComponent = ({controller}: UseLoginControllerProps) => {
  const { states, actions } = controller;
  
  return (
    <Container onSubmit={states.hookForm.handleSubmit(actions.onSubmit)}>
      <Card>
        <TitleContainer>
          <h2>Acesse o sistema</h2>
          <p>Por favor, insira sua credencial para acessar.</p>
        </TitleContainer>
        <Input
          control={states.hookForm.control}
          errors={states.hookForm.formState.errors}
          name="login"
          placeholder="Usuário"
          label="Login"
          iconLeft={<UserIcon height={'25px'}/>}
          maxLength={200}
          height="3.125rem"
          cyTestName="login"
        />
        <Input
          control={states.hookForm.control}
          errors={states.hookForm.formState.errors}
          name="password"
          placeholder="Senha"
          label="Senha"
          iconLeft={<LockInIcon height={'25px'}/>}
          iconRight={<EyesCloseIcon height={'26px'}/>}
          iconRightSecondary={<EyesOpenIcon height={'17.5px'}/>}
          type="password"
          height="3.125rem"
          cyTestName="password"
        />
        <ForgotPasswordAction>
          <p onClick={() => {}}>
            Esqueci minha senha
          </p>
        </ForgotPasswordAction>
        <Button
          onClick={() => {}}
          description="Entrar"
          type="submit"
          maxWidth={"100%"}
        />
      </Card>
    </Container>
  );
};

export default LoginComponent;
