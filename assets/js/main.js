var moment = require('moment');

var format = 'LL'
var dateNow = moment().format(format);

document.getElementById('currentDate').innerHTML = dateNow;