(function(){
		$('nav li').on('click', function () {
		$.getJSON('includes/getImage.php', { critter:this.id }, function(data) {
		console.log(data);
		$('.click-header').text(data.chantryName);
		$('.hidden').removeClass('hidden');
		$('.content-section p').text(data.chantryDesc);
		$('.habitat-header').text(data.chantryName + "lives here");
		$('.habitat').attr('src', 'images/' + data.bgImage + '.jpg');
		});

		});

})();