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

	async EventSheet1_Event39(runtime, localVars)
	{
		runtime.globalVars.temp=toFarsiNumber(localVars.num);
	},

	async Gboks_Event3_Act1(runtime, localVars)
	{
		
		
		//runtime.globalVars.TemporaryCoins = window.parent.userScore;
		//if(window.parent.userScore==null)
		//{
		//runtime.globalVars.TemporaryCoins=0;
		//}
		
		
		//runtime.globalVars.initScore = window.parent.userScore;
		
		gboks.gameInit(function (e) {
		   e || gboks.gameReady();
		});
		
		//gboks.emitter.addListener('start', (e) => {	
			
		//	runtime.globalVars.start = true;
			
			//runtime.globalVars.ajaxHeader=window.parent.csrfToken;
		//});
		
	},

	async Gboks_Event6_Act1(runtime, localVars)
	{
		// to do send score
		var tmp=runtime.globalVars.score;
		window.parent.gboks.emit('gameOver', tmp);
		
		
	},

	async Gboks_Event6_Act3(runtime, localVars)
	{
		// to do send score
		
		window.parent.gboks.emit('gameEnd');
		
		
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

