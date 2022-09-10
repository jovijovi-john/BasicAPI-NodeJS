// aqui vai ficar a configuração com o banco de dados

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'tasklist',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
