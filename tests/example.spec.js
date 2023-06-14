"use strict";

const axios = require("axios");
const assert = require("../utilities/assertion-library.js");

var token = "";

describe("Auth API", function () {
    it("get auth", async () => {
        const options = {
            method: "POST",
            url: `${process.env.apiRoute}/authenticate`,
            data: {
                "firmId": process.env.firmId,
                "id": process.env.userId,
                "password": process.env.userPassword
            }
        };

        await axios
            .request(options)
            .then(response => {
                assert.toEqual(response.status, 200);

                var jsonData = response.data;

                token = jsonData.data.token;

                assert.isAnObject(jsonData.data);
                assert.isAString(jsonData.data.token);
                assert.isAString(jsonData.data.userName);
                assert.isAString(jsonData.data.userType);
                assert.isAnArray(jsonData.data.services);
                assert.isAString(jsonData.data.services[0]);
            });
    });
});
