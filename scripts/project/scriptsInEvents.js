function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
   
    return addComma( n
        .toString()
        .replace(/\d/g, x => farsiDigits[x]));
}




function addComma( str ) {
	var objRegex = new RegExp( '(-?[۰-۹]+)([۰-۹]{3})' );
 
	while( objRegex.test( str ) ) {
		str = str.replace( objRegex, '$1,$2' );
	}
 
	return str;
}



function numentofa(n) {
        var digits = [],
            r;
        do {
            r = n % 10;
            n = (n - r) / 10;
            digits.unshift(String.fromCharCode(r + 1776));
        } while (n > 0);
        return digits.join('');
        }


const scriptsInEvents = {

	async EventSheet1_Event32(runtime, localVars)
	{
		runtime.globalVars.temp=toFarsiNumber(localVars.num);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

