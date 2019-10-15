let path = require('path'),
    constants = require(path.resolve('./commons/constants')),
    cheerio = require("cheerio");

class ogScrapService {

    /**
     * Function to get Open graph metadata from url
     * @param {String} url
     * @return {Promise}
     */
    async getOpenGraphData(body) {
        try {
            let parsedTags = await this.extractMetaTags(body);
            return parsedTags;
        } catch (err) {
            throw err;
        }
    }

    /**
     * Function to extract metatags using cheerio
     * @param html {String}
     * @return {Object}
     */
    async extractMetaTags(html) {
        try {
            const $ = cheerio.load(html);
            let response = {};
            //looping through all ogTags
            for (let ogParam in constants.OG_TAG.PARAMS) {
                let query = constants.OG_TAG.BASE.replace(
                    "@ogTag@",
                    constants.OG_TAG.PARAMS[ogParam].key
                );
                let data;
                if (ogParam === 'images') {
                    let imgSrc = $(query).attr("content");
                    //making image an array
                    data = imgSrc ? [imgSrc] : null;
                } else
                    data = $(query).attr("content");
                if (!data && constants.OG_TAG.PARAMS[ogParam].alt) {
                    //checking for data in alternative tags in case og tags are absent
                    //alternative tags are defined in constants
                    query = constants.OG_TAG.PARAMS[ogParam].alt;
                    if (ogParam === "images") {
                        data = [];
                        $(query).each((i, node) => {
                            let imgSrc = $(node).attr("src");
                            if (imgSrc && imgSrc.includes('http')) {
                                data.push(imgSrc);
                            }
                        });
                        response[ogParam] = data;
                        continue;
                    }
                    if (constants.OG_TAG.PARAMS[ogParam].isAltText) {
                        data = $(query).text();
                    } else {
                        data = $(query).attr("content");
                    }
                }
                response[ogParam] = data;
            }
            return response;
        } catch (err) {
            throw err;
        }
    }

}

module.exports = new ogScrapService();