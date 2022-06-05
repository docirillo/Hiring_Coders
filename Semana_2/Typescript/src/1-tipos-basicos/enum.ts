// enum Permissoes {
//   admin = "ADMIN",
//   editor = "EDITOR",
//   comum = "COMUM",
// }

// const usuario = {
//   nivel: Permissoes.comum,
// };

// console.log(usuario);

enum Permissoes {
  admin,
  editor,
  comum,
}

const usuario = {
  nivel: Permissoes.comum,
};

console.log(usuario);