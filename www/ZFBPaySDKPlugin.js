
var ZFBPaySDKPlugin = {
    PayEvent: function(payInfo, success, error) {
        cordova.exec(
        	success, // success callback function
        	error, // error callback function
        	'alipay', // mapped to our native Java class called "ZFBPaySDKPlugin"
        	'payment', // with this action name
        	[payInfo]
        );
    }
};
