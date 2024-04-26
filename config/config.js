const env = process.env.NODE_ENV || 'production';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb+srv://pashov91:Tim911003@mynewcluster.0hywvsh.mongodb.net/Forum',
        origin: ['http://localhost:5555', 'http://localhost:4200', 'https://myforumjs.web.app']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb+srv://pashov91:Tim911003@mynewcluster.0hywvsh.mongodb.net/Forum',
        origin: ['https://myforumjs.web.app']
    }
};

module.exports = config[env];
