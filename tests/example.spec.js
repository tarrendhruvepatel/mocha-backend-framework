"use strict";

const axios = require("axios");
const assert = require("../utilities/assertion-library.js");

var token = "";

describe("Auth API", function () {
    it("get auth", async () => {
        const options = {
            method: "POST",
            url: "https://example.com/auth/signup",
            data: {
                "email": "",
                "password": "",
                "firstName": "",
                "lastName": "",
            }
        };

        await axios
            .request(options)
            .then(response => {
                assert.toEqual(response.status, 200);

                var jsonData = response.data;

                token = jsonData.access_token;

                assert.isAString(jsonData.message);
            });
    });
});
