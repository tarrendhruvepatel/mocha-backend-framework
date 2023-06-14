var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;

const toEqual = (jsonData, expectedData) => {
    assert.equal(jsonData, expectedData);
};

const isAString = (jsonData) => {
    assert.isString(jsonData);
};

const hasLengthAbove = (jsonData, length) => {
    expect(jsonData).to.have.length.above(length);
};

const isANumber = (jsonData) => {
    assert.isNumber(jsonData);
};

const isAnObject = (jsonData) => {
    assert.isObject(jsonData);
};

const isAnArray = (jsonData) => {
    assert.isArray(jsonData);
};

const isABoolean = (jsonData) => {
    assert.isBoolean(jsonData);
};

const isANullValue = (jsonData) => {
    assert.isNull(jsonData);
};

const exists = (jsonData) => {
    assert.exists(jsonData);
};

const isEmpty = (jsonData) => {
    assert.isEmpty(jsonData);
};

module.exports = {
    toEqual,
    isAString,
    hasLengthAbove,
    isANumber,
    isAnObject,
    isAnArray,
    isABoolean,
    isANullValue,
    exists,
    isEmpty
};
