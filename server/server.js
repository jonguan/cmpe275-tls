var tls = require('tls'),
    fs = require('fs'),
    msg = [
            ".-..-..-.  .-.   .-. .--. .---. .-.   .---. .-.",
            ": :; :: :  : :.-.: :: ,. :: .; :: :   : .  :: :",
            ":    :: :  : :: :: :: :: ::   .': :   : :: :: :",
            ": :: :: :  : `' `' ;: :; :: :.`.: :__ : :; ::_;",
            ":_;:_;:_;   `.,`.,' `.__.':_;:_;:___.':___.':_;" 
          ].join("\n");

var options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem'),
  // dhparam: fs.readFileSync('dhparam.pem')
};

tls.createServer(options, function (s) {
  s.write(msg+"\n");
  s.setEncoding('utf8');
  s.pipe(s);
}).listen(8000);
