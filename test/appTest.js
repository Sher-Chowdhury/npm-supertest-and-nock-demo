const app = require('../app')
const nock = require('nock')
const request = require('supertest')
const expect = require('chai').expect


describe("testing function xxxx", () => {


    it('get Chunk Norris joke', async () => {
        const mockResponse = {
            "type": "success",
            "value": {
                "id": 268,
                "joke": "He who lives by the sword, dies by the sword. He who lives by Chuck Norris, dies by the roundhouse kick.",
                "categories": [
    ]
            }
        }

        // nock is just intercepts a request, and gives a response.
        nock('http://api.icndb.comm')
            .get('/jokes/random')
            .reply(200, mockResponse)

        // the following essentially triggers the app.get call.
        // "app" is actually an express object, not a function.
        // and when the listener get's triggered,
        // with matching endpoint path, it triggers the "get" method
        // on that object. In this case, supertest is mimicking
        // a request being sent to the listener, so that the method
        // we want to test, app.get(), get's triggered.

        const res = await request(app).get('/')
        expect(res.status).to.eql(200)
        expect(res.body).to.deep.equal(mockResponse)
    })
})
