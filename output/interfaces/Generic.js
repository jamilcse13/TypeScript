"use strict";
// we define the generic type as object
const response1 = {
    status: 200,
    type: 'good',
    data: {
        id: 1,
        name: 'abc'
    }
};
// error occurs if we want to send anything except onject by data
