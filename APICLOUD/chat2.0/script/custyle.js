var custyle = {
    //rem
    setHtmlFontSize: function (){
        var root = document.getElementsByTagName('html')[0],
            NATIVE_W = 750,
            NATIVE_H = 1334;
        var cw = 50,
            w = window.innerWidth,
            h = window.innerHeight;
        if(w < 768){
            if ((w / h) > (NATIVE_W / NATIVE_H)) {
                cw = h / (NATIVE_H / 100);
            } else {
                cw = w / (NATIVE_W / 100);
            }
            root.style.fontSize = cw + 'px';
        }
    },

    //rsa 加密
    doEncrypt : function(password) {
		var key, modulus, exponent, maxDigits;
		modulus = document.getElementById("rsa_modulus").value;
		exponent = document.getElementById("rsa_exponent").value;
		maxDigits = document.getElementById("rsa_maxDigits").value;
		setMaxDigits(parseInt(maxDigits));
		key = new RSAKeyPair(exponent, exponent, modulus, 1024);
		if (!password) return '';
		var rsapwd = encryptedString(key, password, RSAAPP.PKCS1Padding, RSAAPP.RawEncoding);
		return window.btoa(rsapwd);
	},
};
custyle.setHtmlFontSize();