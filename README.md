# open-graph-scraper

An open graph protocol scraper made with ExpressJS on top of NodeJS and Cheerio. Will get ogTags like title, image, description etc.If Open Graph Protocol tags are not available, searches for other metadata. Implements caching internally using node-cache so that the same requests if cached can be served quicker. Also has unit tests on top of this with Mocha and Chai. For more information on Open Graph Protocol, please check out https://ogp.me/.

If you have any doubts or clarifications on this code, hit me up and I'll try to help you guys out!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You'll need to install NodeJS for running this application. I'm on Node v10.5.3, you can find it at:
```
https://nodejs.org/en/download/
```
You'll also need a code editor to see how the code goes. Use whichever editor which has JS support, I use Visual Studio Code on 
Windows 10.

### Installing

Simple steps to get the application running. Open the terminal to the folder containing og-scraper-express and just type:
```
npm install
```
This should install all the dependencies within package.json and create your package-lock.json and node modules.

After the previous command completes successfully, open the terminal and type:
```
npm start
```
This should get the program up and running on the default port.

To run the tests, all you need to do is, type:

```
npm run test
```

## Usage

Once program is up and running, you can call the endpoint with server_ip/ogScrap. By default, the port should be 3000. On your local machine, server_ip would be http://localhost:3000 (if you haven't specified any port). This is a post request which expects a JSON post body as such:
```
{
  "url" : "https://duckduckgo.com/?t=hk"
}
```
I also hosted the same app on heroku. So you guys can run the api by calling a post request to https://arcane-spire-12570.herokuapp.com/ogScrap with the same body as above and see the magic happen.

## Built With

* [NodeJS](https://nodejs.org/en/) - The language used
* [Express](https://expressjs.com/) - Framework used on top of node.
* [Cheerio](https://cheerio.js.org/) - Package used for parsing OG tags.
* [Node-Cache](https://www.npmjs.com/package/node-cache) - Simple NodeJS caching module.
* [Mocha](https://mochajs.org/) - Test framework for JS.
* [Chai](https://www.chaijs.com/) - Assertion library for JS.

## Contributing

Anybody with ideas to genuinely improve the project are welcome. We use git flow, so just pull the repo, cut a branch on develop and put a pull request back to us. We will look through the PR as soon as possible. We suggest you make sure your PR passes all unit tests, and add further unit tests for any new functionalities introduced.

## Versioning
Currently, no versions are available. Will update soon

## Authors

* **Govind S** - *Initial work* - [dopecodez](https://github.com/dopecodez)

## License

This project is free. Use it in whichever way you please.

## Acknowledgments

* Hat tip to anyone whose code was used
