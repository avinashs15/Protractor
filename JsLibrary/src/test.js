var fs = require('fs');
//store the string which needs to be read and replaced
var stringData = require('./data/string.json');
var regEx = '/[a-zA-Z]*_[a-zA-Z]_' + stringData.currentString + '/g';

//delete the result file if it exists
if(fs.existsSync("./data/result.txt"))
    fs.unlinkSync("./data/result.txt");

//readFileSync reads the file from /data/ToAvi.txt and splits it into new line using .split('\n')
fs.readFileSync('./data/source.txt').toString().split('\n').forEach(function (data) {
    
    // '/[a-zA-Z]*_[a-zA-Z]_System/g' => Is the regular expression which matches String_string_System and replaced by System ( stringData.currentString)
    var newStr = data.replace(regEx, stringData.currentString);
    
    //Append each line to result.txt and save
    fs.appendFileSync("./data/result.txt", newStr.toString() + "\n");    
});