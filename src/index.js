module.exports = function toReadable (number) {
    if(number == '0') {
        return 'zero';
    }

    let str = '' + number;
    if(str.length > 3) {
        return 'overflow';
    }

    let beforeTwenty = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ',
        'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let dozens = ['', '', 'twenty ','thirty ','forty ','fifty ', 'sixty ','seventy ','eighty ','ninety '];
    let rank = ['','', '','hundred ', 'million', 'billion']

    let result = '';
    if(str.length > 2) {
        let num3 = +str[str.length - 3];
        result += beforeTwenty[num3] + rank[3];
    }

    if(str.length > 1) {
        let num2 = +str[str.length - 2];

        if(num2 == 1)
        {
            num2 = +(str[str.length - 2] + str[str.length - 1]);
            result +=  beforeTwenty[num2];

            return result.replace(/^\s+|\s+$/gm,'');
        }
        else if (num2 > 1) {
            result += dozens[num2];
        }
    }

    if(str.length > 0) {
        let num3 = +str[str.length - 1];

        result += num3 !== 0 ? beforeTwenty[num3] : '';
    }

    return  result.replace(/^\s+|\s+$/gm,'');
}
