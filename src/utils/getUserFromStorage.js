export const getUserFromStorage = () => {
  const userinfo = JSON.parse(localStorage.getItem("userInfo")) || null;
  return userinfo?.token;
};

export const getUsernameFromStorage = () => {
  const userinfo = JSON.parse(localStorage.getItem("userInfo")) || null;
  return userinfo?.username;
};

export const getEmailFromStorage = () => {
  const userinfo = JSON.parse(localStorage.getItem("userInfo")) || null;
  return userinfo?.email;
};
