"use strict";
// we restict the data type in object by generic way
// enum
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["FORBIDDEN"] = 2] = "FORBIDDEN";
})(RType || (RType = {}));
// we define the generic type as object
const response1 = {
    status: 200,
    type: RType.FAILURE,
    data: {
        id: 1,
        name: 'abc'
    }
};
// error occurs if we want to send anything except onject by data
