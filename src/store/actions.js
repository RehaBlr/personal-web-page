//
// export const logout = (history) => ({ type: "logout", payload: history });
export const swit = (lan, setdata) => ({
  type: "swit",
  payload: { lan, setdata },
});
