const path = require("path"),
    helper = require(path.resolve("./commons/helper")),
    constants = require(path.resolve('./commons/constants'));

class requestValidator {
    /**
     * Function to validate input and throw error if not valid
     * @param req {Object}
     */
    validateOGRequest(body){
        if (!body.url) {
            let data = {
                status: constants.RESPONSE_STATUS.BAD_REQUEST,
                error: constants.MESSAGES.ERROR.URL_MISSING,
                message: constants.MESSAGES.ERROR.BAD_REQUEST
            }
            throw helper.createErrorResponse(data);
        }
        if (!helper.isValidUrl(body.url)){
            let data = {
                status: constants.RESPONSE_STATUS.BAD_REQUEST,
                error: constants.MESSAGES.ERROR.BAD_URL,
                message: constants.MESSAGES.ERROR.BAD_REQUEST
            }
            throw helper.createErrorResponse(data);
        }
        return body;
    }
}

module.exports = new requestValidator();