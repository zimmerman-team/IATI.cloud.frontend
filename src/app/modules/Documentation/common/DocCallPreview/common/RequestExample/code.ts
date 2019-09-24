export const codes = {
  code:
    "var https = require('https');\n\nvar options = {\n  'method': 'GET',\n  'hostname': 'test-datastore.iatistandard.org',\n  'path': '/api/activities/?format=csv&fields=descriptions%2Ctitle%2Ctransaction_types',\n  'headers': {\n  }\n};\n\nvar req = https.request(options, function (res) {\n  var chunks = [];\n\n  res.on(\"data\", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on(\"end\", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on(\"error\", function (error) {\n    console.error(error);\n  });\n});\n\nreq.end();",
};
