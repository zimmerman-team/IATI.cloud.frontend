export const codes = {
  code: `var https = require('https');
var options = {
  'method': 'GET',
  'hostname': 'iati.cloud',
  'path': '/api/activities/?has_other_identifier=True&fields=title%2Cother_identifier&format=json',
  'headers': {
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();`,
};
