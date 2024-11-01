var fs = require('fs');

fs.mkdir('./docs', 0666, function(err) {
    //if (err) throw err;
    if (err) {
        if (err.code == "EEXIST") {     // if file already exists...
        } else {
            throw err
        }
    } else {
        console.log("새로운 docs 폴더를 만들었습니다.");
    }

    fs.rmdir('./docs', function(err) {
        if (err) throw err;
        console.log("docs 폴더를 삭제했습니다.");
    });
});