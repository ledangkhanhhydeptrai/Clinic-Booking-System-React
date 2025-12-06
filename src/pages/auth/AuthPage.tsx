import React from "react";
import { useDispatch } from "react-redux";
import { useLogin } from "../../features/auth/useAuth";
import { setToken } from "../../features/auth/authSlice";

const AuthPage: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const loginMutation = useLogin();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(
      { username, password },
      {
        onSuccess: data => dispatch(setToken(data.data.token))
      }
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Nhập username"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Nhập password"
      />
      <button type="submit" disabled={loginMutation.isPending}>
        Login
      </button>
      {loginMutation.error &&
        <p>
          {loginMutation.error.message}
        </p>}
    </form>
  );
};

export default AuthPage;
