export function isLogined() {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
}

export function login(userName) {
  return localStorage.setItem("token", userName);
}

export function loginOut() {
  return localStorage.removeItem("token");
}
