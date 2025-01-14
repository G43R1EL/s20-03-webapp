// Main configuration file
const config = {
    // Database configuration
    database:{
        connection_string: process.env.MONGODB_URI || 'mongodb://localhost:27017/notes',
        options: {
        }
    },
    // Server configuration
    server:{
        hostname: process.env.SERVER_HOST || 'localhost',
        port: process.env.SERVER_PORT || 3000
    },
    // Authentication configuration
    auth: {
        secret: process.env.SECRET_KEY || 'secret-key',
        expiresIn: process.env.EXPIRES_IN || '1h',
        salt: () => {
            if (process.env.SALT_ROUNDS) {
                return parseInt(process.env.SALT_ROUNDS);
            } else  {
                return 10;
            }
        },
    }
}

module.exports = config;