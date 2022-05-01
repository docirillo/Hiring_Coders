// Mostra uma string de trás para frente
exports.reverse_string = function (str) {
  return str.split('').reverse().join('');
};

// Verifica se uma string é uma data
exports.regexp_date = function (str) {
  let pattern =
    /^((\d{2}\/\d{2}\/\d{1,4})|(\d{1,4}\/\d{2}\/\d{2})|(\d{2}-\d{2}-\d{1,4})|(\d{1,4}-\d{2}-\d{2}))$/;
  return pattern.test(str);
};

// Multiplica dois números
exports.multiply = function (x, y) {
  return x * y;
};

// Filtra um json de empregados com seu cargo
exports.filter_post_json = function (json, post) {
  let result = '';
  for (let emp of json.employees) {
    if (emp.post === post) result += emp.name + '\n';
  }
  return result;
};
