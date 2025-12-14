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
  removeRole: () => localStorage.removeItem(ROLE_KEY),
  getUser: () => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  },
  setUser: (user: { username: string }) =>
    localStorage.setItem("user", JSON.stringify(user)),
  removeUser: () => localStorage.removeItem("user") // ✅ sửa tên hàm
};

export default storage;
