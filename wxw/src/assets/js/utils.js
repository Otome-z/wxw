Date.prototype.DateAdd = function(strInterval, Number) {
    var dtTmp = this;
    switch (strInterval) {
        case 's':
            return new Date(Date.parse(dtTmp) + 1000 * Number);
        case 'n':
            return new Date(Date.parse(dtTmp) + 60000 * Number);
        case 'h':
            return new Date(Date.parse(dtTmp) + 3600000 * Number);
        case 'd':
            return new Date(Date.parse(dtTmp) + 86400000 * Number);
        case 'w':
            return new Date(Date.parse(dtTmp) + 86400000 * 7 * Number);
        case 'q':
            return new Date(
                dtTmp.getFullYear(),
                dtTmp.getMonth() + Number * 3,
                dtTmp.getDate(),
                dtTmp.getHours(),
                dtTmp.getMinutes(),
                dtTmp.getSeconds()
            );
        case 'm':
            return new Date(
                dtTmp.getFullYear(),
                dtTmp.getMonth() + Number,
                dtTmp.getDate(),
                dtTmp.getHours(),
                dtTmp.getMinutes(),
                dtTmp.getSeconds()
            );
        case 'y':
            return new Date(
                dtTmp.getFullYear() + Number,
                dtTmp.getMonth(),
                dtTmp.getDate(),
                dtTmp.getHours(),
                dtTmp.getMinutes(),
                dtTmp.getSeconds()
            );
    }
};

//  +---------------------------------------------------
//  | 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串
//  +---------------------------------------------------
Date.prototype.DateDiff = function(strInterval, dtEnd) {
    var dtStart = this;
    if (typeof dtEnd == 'string') {
        // 如果是字符串转换为日期型
        dtEnd = StringToDate(dtEnd);
    }
    switch (strInterval) {
        case 's':
            return parseInt((dtEnd - dtStart) / 1000);
        case 'n':
            return parseInt((dtEnd - dtStart) / 60000);
        case 'h':
            return parseInt((dtEnd - dtStart) / 3600000);
        case 'd':
            return parseInt((dtEnd - dtStart) / 86400000);
        case 'w':
            return parseInt((dtEnd - dtStart) / (86400000 * 7));
        case 'm':
            return (
                dtEnd.getMonth() +
                1 +
                (dtEnd.getFullYear() - dtStart.getFullYear()) * 12 -
                (dtStart.getMonth() + 1)
            );
        case 'y':
            return dtEnd.getFullYear() - dtStart.getFullYear();
    }
};

//  +---------------------------------------------------
//  | 日期输出字符串，重载了系统的toString方法
//  +---------------------------------------------------
Date.prototype.ToString = function(showWeek) {
    var myDate = this;
    var str = myDate.toLocaleDateString();
    if (showWeek) {
        var Week = [
            '[[[日]]]',
            '[[[一]]]',
            '[[[二]]]',
            '[[[三]]]',
            '[[[四]]]',
            '[[[五]]]',
            '[[[六]]]',
        ];
        str += ' [[[星期]]]' + Week[myDate.getDay()];
    }
    return str;
};

Date.prototype.Week = function() {
    var myDate = this;
    var str = myDate.toLocaleDateString();
    var Week = [
        '[[[日]]]',
        '[[[一]]]',
        '[[[二]]]',
        '[[[三]]]',
        '[[[四]]]',
        '[[[五]]]',
        '[[[六]]]',
    ];
    return Week[myDate.getDay()];
};

// +---------------------------------------------------
// | 字符串转成日期类型
// | 格式 MM/dd/YYYY MM-dd-YYYY YYYY/MM/dd YYYY-MM-dd
// +---------------------------------------------------
function StringToDate(DateStr) {
    if (DateStr.indexOf('/') == -1 && DateStr.indexOf('-') == -1) return null;

    DateStr = DateStr.replace('T', ' ');
    var converted = Date.parse(DateStr.replace(/\-/g, '/'));
    var myDate = new Date(converted);
    if (isNaN(myDate)) {
        // var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';
        var arys = DateStr.split('-');
        if (arys[0] > 9999 || arys[1] > 12 || arys[2] > 31) {
            // alert(DateStr)
            return null;
        }

        myDate = new Date(arys[0], --arys[1], arys[2]);
    }
    return myDate;
}

Date.prototype.Format = function(fmt) {
    // author: meizz
    var o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        S: this.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? o[k]
                    : ('00' + o[k]).substr(('' + o[k]).length)
            );
    return fmt;
};
