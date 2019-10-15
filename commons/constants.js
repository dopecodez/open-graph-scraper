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
    FIELDS : [
      {
        multiple: false,
        property: 'og:title',
        fieldName: 'ogTitle'
      },
      {
        multiple: false,
        property: 'og:type',
        fieldName: 'ogType'
      },
      {
        multiple: true,
        property: 'og:image',
        fieldName: 'ogImage'
      },
      {
        multiple: true,
        property: 'og:image:url',
        fieldName: 'ogImageURL'
      },
      {
        multiple: true,
        property: 'og:image:secure_url',
        fieldName: 'ogImageSecureURL'
      },
      {
        multiple: true,
        property: 'og:image:width',
        fieldName: 'ogImageWidth'
      },
      {
        multiple: true,
        property: 'og:image:height',
        fieldName: 'ogImageHeight'
      },
      {
        multiple: true,
        property: 'og:image:type',
        fieldName: 'ogImageType'
      },
      {
        multiple: false,
        property: 'og:url',
        fieldName: 'ogUrl',
      },
      {
        multiple: false,
        property: 'og:audio',
        fieldName: 'ogAudio'
      },
      {
        multiple: false,
        property: 'og:audio:url',
        fieldName: 'ogAudioURL'
      },
      {
        multiple: false,
        property: 'og:audio:secure_url',
        fieldName: 'ogAudioSecureURL'
      },
      {
        multiple: false,
        property: 'og:audio:type',
        fieldName: 'ogAudioType'
      },
      {
        multiple: false,
        property: 'og:description',
        fieldName: 'ogDescription'
      },
      {
        multiple: false,
        property: 'og:determiner',
        fieldName: 'ogDeterminer'
      },
      {
        multiple: false,
        property: 'og:locale',
        fieldName: 'ogLocale'
      },
      {
        multiple: false,
        property: 'og:locale:alternate',
        fieldName: 'ogLocaleAlternate'
      },
      {
        multiple: false,
        property: 'og:site_name',
        fieldName: 'ogSiteName'
      },
      {
        multiple: false,
        property: 'og:product:retailer_item_id',
        fieldName: 'ogProductRetailerItemId'
      },
      {
        multiple: false,
        property: 'og:product:price:amount',
        fieldName: 'ogProductPriceAmount'
      },
      {
        multiple: false,
        property: 'og:product:price:currency',
        fieldName: 'ogProductPriceCurrency'
      },
      {
        multiple: false,
        property: 'og:product:availability',
        fieldName: 'ogProductAvailability'
      },
      {
        multiple: false,
        property: 'og:product:condition',
        fieldName: 'ogProductCondition'
      },
      {
        multiple: false,
        property: 'og:price:amount',
        fieldName: 'ogPriceAmount'
      },
      {
        multiple: false,
        property: 'og:price:currency',
        fieldName: 'ogPriceCurrency'
      },
      {
        multiple: false,
        property: 'og:availability',
        fieldName: 'ogAvailability'
      },
      {
        multiple: true,
        property: 'og:video',
        fieldName: 'ogVideo'
      },
      {
        multiple: true,
        property: 'og:video:url', // An alternative to 'og:video'
        fieldName: 'ogVideo'
      },
      {
        multiple: true,
        property: 'og:video:secure_url',
        fieldName: 'ogVideoSecureURL'
      },
      {
        multiple: true,
        property: 'og:video:width',
        fieldName: 'ogVideoWidth'
      },
      {
        multiple: true,
        property: 'og:video:height',
        fieldName: 'ogVideoHeight'
      },
      {
        multiple: true,
        property: 'og:video:type',
        fieldName: 'ogVideoType'
      }
    ]
  };