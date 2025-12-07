const ACCESS_TOKEN_KEY = "token";
const ROLE_KEY = "user_role";
const storage = {
  getToken: () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  setToken: (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },

  removeToken: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  },
  setRole: (role: string) => localStorage.setItem(ROLE_KEY, role),
  getRole: () => localStorage.getItem(ROLE_KEY),
  removeRole: () => localStorage.removeItem(ROLE_KEY)
};

export default storage;
