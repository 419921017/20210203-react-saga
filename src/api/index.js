export default {
  login(username, password) {
    return new Promise((resolve, rejsect) => {
      setTimeout(() => {
        let num = Math.random();
        console.log('num', num);
        if (num > 0.5) {
          resolve(username + Date.now());
        } else {
          rejsect('login error');
        }
      }, 1000);
    });
  },
  logout() {},
};
