const responses = {
    success: {
        status: 200,
        message: 'Success'
    },
    notFound: {
        status: 404,
        message: 'Not Found'
    },
    notImplemented: {
        status: 501,
        message: 'Not Implemented'
    },
    placeholder: (message = '') => {
        return {
            status: 200,
            message
        }
    }
}

module.exports = responses;
