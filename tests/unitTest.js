let chai = require('chai'),
    chaiHttp = require('chai-http'),
    app = require('../app');

// Configure chai
chai.use(chaiHttp);
let expect = chai.expect;

//test function to check whether scraping api works
describe('Open Graph scraping function check', () => {
    it('scrap fails', async function () {  
        try {
            let res = await chai.request(app)
                .post('/ogScrap')
                .send({ });
            expect(res).to.have.status(400);
        }
        catch (err) {
            throw err;
        } 
    }),
    it('scrap fails again', async function () {  
        try {
            let res = await chai.request(app)
                .post('/ogScrap')
                .send({ url : "dfsd"});
            expect(res).to.have.status(400);
        }
        catch (err) {
            throw err;
        } 
    }),
    it('scraps successfully', async function () {  
        try {
            let res = await chai.request(app)
                .post('/ogScrap')
                .send({ url: "https://duckduckgo.com/?t=hk" });
            expect(res).to.have.status(200);
            expect(res.body.data).to.have.all.keys('title', 'images', 'description', 'url');
        }
        catch (err) {
            throw err;
        } 
    });
});
