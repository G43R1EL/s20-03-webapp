const responses = {
    success: {
        status: 200,
        message: 'Success'
    },
    notFound: {
        status: 404,
        message: 'Not Found'
    },
    methodNotAllowed: {
        status: 405,
        message: 'Method Not Allowed'
    },
    unauthorized: {
        status: 401,
        message: 'Unauthorized'
    },
    placeholder: (message = '') => {
        return {
            status: 200,
            message
        }
    }
}

module.exports = responses;
