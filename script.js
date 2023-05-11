class User {
  constructor(name, email, password, age) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }

  authenticate(password) {
    return this.password === password;
  }
}

class UserManager {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
  }

  findUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }
}

// criando um gerenciador de usuários
const userManager = new UserManager();

//criando novos usuários e eadicionando ao gerenciador
const user1 = new User("João", "joao@gmail.com", "123456", 25);
userManager.addUser(user1);

const user2 = new User("Ana", "ana@gmail.com", "senha1010", 17);
userManager.addUser(user2);

//buscando um usuário pelo email
const foundUser = userManager.findUserByEmail("joao@gmail.com");
console.log(foundUser);

//verificando se o usuário é maior de idade
console.log(foundUser.isAdult());

//Autenticando o usuário com a senha correta
console.log(foundUser.authenticate("123456"));

// autenticando o usuário com a senha incorreta
console.log(foundUser.authenticate("senha_incorreta")); // false
