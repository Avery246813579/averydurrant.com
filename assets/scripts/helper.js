function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                callback(undefined, rawFile.responseText);
            } else {
                callback('Couldn\'t load file ' + file);
            }
        }
    };

    rawFile.send(null);
}

function getServerTime() {
    var offset = -4.0;

    var clientDate = new Date();
    var utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

    return new Date(utc + (3600000 * offset));
}

function formatTime(date) {
    var instance = this;

    return instance.toDouble(date.getMonth() + 1) + "-" + instance.toDouble(date.getDate()) + "-" + instance.toDouble(date.getFullYear())
}

function toDouble(number) {
    if (number > 9) {
        return number;
    } else {
        return "0" + number;
    }
}


function getTime() {
    return this.formatTime(this.getServerTime());
}

function parseTime(raw) {
    var time = new Date();

    var sSplit = raw.split("-");

    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);

    time.setMonth(0);
    time.setDate(sSplit[0]);
    time.setFullYear(sSplit[1]);

    return time;
}