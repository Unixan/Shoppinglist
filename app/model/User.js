class User {
  constructor(email, password, userName = "") {
    this.email = email;
    this.userName = userName;
    this.password = password;
  }
}

export default User;
