Array.prototype.filter.call(
    document.getElementsByTagName('div'),
    (el) => el.getAttribute('data-sku-id')
).forEach(function( x ) {
		var divImg = x.getElementsByClassName('img_product')[0];
		divImg.innerHTML = "<svg class='barcode' jsbarcode-value='"+x.getAttribute('data-sku-id')+"' jsbarcode-textmargin='0' jsbarcode-fontoptions='bold'> </svg>";
	});

JsBarcode(".barcode").init();