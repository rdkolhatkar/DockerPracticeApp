const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe("GET /application/test/data", function () {
    it("should return a list of people with status 200", function (done) {
        chai.request("http://localhost:9091")
            .get("/application/test/data")
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                expect(res.body.length).to.equal(5);

                // Check for expected keys in first object
                expect(res.body[0]).to.have.keys(["id", "name", "age"]);
                done();
            });
    });
});
