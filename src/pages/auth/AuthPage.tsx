import React from "react";
import { useLogin } from "../../features/auth/useAuth";
import AuthBranding from "./components/AuthBranding";
import LoginForm from "./components/LoginForm";
import AuthLayout from "./components/AuthLayout";

const AuthPage: React.FC = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const loginMutation = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  };

  return (
    <AuthLayout>
      <AuthBranding />
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </AuthLayout>
  );
};

export default AuthPage;
