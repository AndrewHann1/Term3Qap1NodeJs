//require is used to import moment 
var moment = require('moment');
//assigning time to moment() which gives current time then .format() will give it a default format
var time = moment().format('MMMM Do YYYY, h:mm:ss')
//console.log to display the output 
console.log(time)

//arguments can be added to change the format
var day = moment().format('dddd')
console.log(day)

//.from now can also be used to show how far away something is either present or past
var reltime = moment("20260526", "YYYYMMDD").fromNow()
console.log(reltime)