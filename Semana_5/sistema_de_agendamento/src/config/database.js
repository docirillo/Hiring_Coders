module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '49154',
  username: 'postgres',
  password: 'docker',
  omitNull: true,
  database: 'sistema-de-agendamento',
  define: { timestamps: true, underscored: true, underscoredAll: true },
};
