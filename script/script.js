

jQuery('document').ready(function() {
	function sell(obj) {
		jQuery(obj).css('margin-right', '0px');
		jQuery(obj).css('border-radius', '25px 0 0 25px');
	}

	function dontSell(obj) {
		jQuery(obj).css('margin-right', '60px');
		jQuery(obj).css('border-radius', '25px');
	}

	//jQuery('#infoMohito').hide();
	sell('#menuMohito');
	jQuery('#infoAperolShprits').hide();
	jQuery('#infoGlintvein').hide();

	jQuery('#menuMohito').mouseover(function() {
		sell(this);
		dontSell('#menuAperolShprits');
		dontSell('#menuGlintvein');
		jQuery('#infoMohito').show('#infoMohito');
		jQuery('#infoAperolShprits').hide('#infoAperolShprits');
		jQuery('#infoGlintvein').hide('#infoGlintvein');

	});

	jQuery('#menuAperolShprits').mouseover(function() {
		sell(this);
		dontSell('#menuMohito');
		dontSell('#menuGlintvein');
		jQuery('#infoAperolShprits').show('#infoAperolShprits');
		jQuery('#infoMohito').hide('#infoMohito');
		jQuery('#infoGlintvein').hide('#infoGlintvein');
	});

	jQuery('#menuGlintvein').mouseover(function() {
		sell(this);
		dontSell('#menuMohito');
		dontSell('#menuAperolShprits');
		jQuery('#infoGlintvein').show('#infoGlintvein');
		jQuery('#infoMohito').hide('#infoMohito');
		jQuery('#infoAperolShprits').hide('#infoAperolShprits');
	})
});