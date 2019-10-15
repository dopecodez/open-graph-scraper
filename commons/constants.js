module.exports = {
    MESSAGES: {
      ERROR: {
        INTERNAL_SERVER_ERROR: "Internal Server Error",
        BAD_REQUEST: "Bad Request",
        URL_MISSING: 'Missing URL in request',
        BAD_URL : 'Invalid URL provided'
      },
      SUCCESS: {
        DATA_POPULATED: "Data populated successfully"
      }
    },
    RESPONSE_STATUS: {
      SUCCESS: 200,
      INTERNAL_SERVER_ERROR: 500,
      BAD_REQUEST: 400,
      SUCCESS_NO_CONTENT: 204
    },
    //For querying DOM to get ogTags
    OG_TAG: {
      BASE: "meta[property='@ogTag@']",
      //Key names can be modified to changed the response structure
      PARAMS: {
        title: {
          key: 'og:title',
          alt: 'title',
          isAltText: true
        },
        images: {
          key: 'og:image',
          alt: 'img'
        },
        description: {
          key: 'og:description',
          alt: "[name='description']"
        },
        url: {
          key: 'og:url',
          alt: "[name='url']"
        },
        type: {
          key: 'og:type'
        }
      }
    },
  };