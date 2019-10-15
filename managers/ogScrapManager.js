const path = require("path"),
    helper = require(path.resolve("./commons/helper")),
    ogService = require(path.resolve("./services/ogScrapService")),
    requestService = require(path.resolve("./services/requestService")),
    NodeCache = require('node-cache'),
    cache = new NodeCache(),
    requestValidator = require(path.resolve("./managers/ogRequestValidator")),
    constants = require(path.resolve('./commons/constants'));

class ogScrapManager {

    /**
     * Function to handle request, cache if required and return output
     * @param req {Object}
     * @return {Promise}
     */
    async getOpenGraphData(req) {
        requestValidator.validateOGRequest(req.body);
        try {
            let cacheResponse = await cache.get(req.body.url);
            if (cacheResponse) { //Checking if previously cached url
                return cacheResponse;
            }
            let body = await requestService.getHTML(req.body.url);
            let response = await ogService.getOpenGraphData(body.body);
            await cache.set(req.body.url, response); //save data to cache
            return helper.createSuccessResponse(response);
        } catch (err) {
            let data = {
                status: constants.RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
                error: constants.MESSAGES.ERROR.INTERNAL_SERVER_ERROR,
                message: err
            }
            throw helper.createErrorResponse(data);
        }
    }
}

module.exports = new ogScrapManager();