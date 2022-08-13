"use strict";
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
drawRectangle({
    width: 30,
    length: 50
});
let threeDoptions = {
    width: 30,
    length: 50,
    height: 60
};
drawRectangle(threeDoptions); // we can send the params by a variable
// pass by reference
