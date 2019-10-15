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
            let meta = $('meta');
            let keys = Object.keys(meta);
            let response = {}
            keys.forEach(function (key) {
                if (!(meta[key].attribs && (meta[key].attribs.property || meta[key].attribs.name))) {
                    return;
                }
                let property = meta[key].attribs.property || meta[key].attribs.name;
                let content = meta[key].attribs.content || meta[key].attribs.value;
                constants.FIELDS.forEach(function (item) {
                    if (property === item.property) {
                        if (!item.multiple) {
                            response[item.fieldName] = content;
                        } else if (!response[item.fieldName]) {
                            response[item.fieldName] = [content];
                        } else if (Array.isArray(response[item.fieldName])) {
                            response[item.fieldName].push(content);
                        }
                    }
                });
            });
            // Get Title if og title not provided
            if (!response.ogTitle) {
                response.ogTitle = $('title').text();
            }
            // Get meta description tag if og description was not provided
            if (!response.ogDescription) {
                response.ogDescription = $('[name="description"]').attr('content');
            }
            // Get images src if there is no og:image tag.
            if (!response.ogImage) {
                let data = [];
                $('img').each((i, node) => {
                    let imgSrc = $(node).attr("src");
                    if (imgSrc && imgSrc.includes('http')) {
                        data.push(imgSrc);
                    }
                });
                response.ogImage = data;
            }
            return response;
        } catch (err) {
            throw err;
        }
    }

}

module.exports = new ogScrapService();