import { createSlice } from "@reduxjs/toolkit";

const savedUser =
  localStorage.getItem("user");

const savedToken =
  localStorage.getItem("token");

const initialState = {
  user: savedUser
    ? JSON.parse(savedUser)
    : null,

  token: savedToken || null,

  isAuthenticated:
    savedToken !== null,

  loading: false,

  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      const { email, password } =
        action.payload;

      /*
       * TEMPORARY LOGIN
       *
       * Later this will be replaced by:
       *
       * POST /api/auth/login
       *
       * with JWT from your backend.
       */

      const user = {
        id: "demo-user",
        firstName: "Medwajih",
        lastName: "",
        email,
        role: "user",
      };

      const token = "demo-token";

      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.error = null;

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "token",
        token
      );
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },

    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(state.user)
      );
    },

    setCredentials: (state, action) => {
      const { user, token } =
        action.payload;

      state.user = user;
      state.token = token;
      state.isAuthenticated = true;

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "token",
        token
      );
    },

    setAuthError: (state, action) => {
      state.error = action.payload;
    },

    clearAuthError: (state) => {
      state.error = null;
    },
  },
});

export const {
  login,
  logout,
  updateUser,
  setCredentials,
  setAuthError,
  clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;