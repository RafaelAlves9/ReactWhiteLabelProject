import { SubmitHandler, useForm } from "react-hook-form";
import { ZLoginRequester, TLoginRequester } from "@request/UserRequest";
import { zodResolver } from "@hookform/resolvers/zod";
import { AutenticationGateway } from "@gateway/Autentication.gateway";
import { useNavigate } from "react-router-dom";

const UseLoginController = () => {
  const autenticationGateway = new AutenticationGateway();
  const navigate = useNavigate();

  const hookForm = useForm<TLoginRequester>({
    defaultValues: {
      login: "",
      password: ""
    },
    resolver: zodResolver(ZLoginRequester),
  });

  const onSubmit: SubmitHandler<TLoginRequester> = async () => {
    await autenticationGateway.login(hookForm.watch())
    .then((result) => {
      if(result) navigate("/home");
    })
  };

  return {
    states: {
      hookForm
    },
    actions: {
      onSubmit,
    },
    setters: {
      
    }
  }
};

export default UseLoginController;
