(function () {
	var pokeImg = document.querySelectorAll('nav li'),
		critterName = document.querySelector('.click-header'),
		critterPic = document.querySelector('.pokemon-large'),
		critterInfo = document.querySelector('.content-secion p'),
		habName = document.querySelector('.habitat-header'),
		critterHab = document.querySelector('.habitat');


		function makeRequest() {
			httpRequest = new XMLHttpRequest();

			if (!httpRequest) {
				console.log('your brower aint working');
				return false;
			}

			 httpRequest.onreadystatechange = showImageInfo;
			 httpRequest.open('GET', 'includes/getImage.php' + '?seeker' + this.id);
			 httpRequest.send();
		}

		function showImageInfo() {
		 	if (httpRequest.readystate === XMLHttpRequest.DONE && httpRequest.status ===200){
		 		//parse stringed result
		 		var	chantryData = JSON.parse(httpRequest.responseText);
		 			critterName.firstChild.nodeValue = chantryData.chantryName;


		 		[].forEach.call(document.querySelectorAll('.hidden'), function(item){
		 			item.classList.remove('hidden');
		 		});


				critterPic.src = "images/" + chantryData.chantryImage + ".png";
		 		critterInfo.firstChild.nodeValue = chantryData.chantryDesc;
		 		habName.firstChild.nodeValue = chantryData.chantryName + "lives here!";
		 		critterHab.src = "images/" + chantryData.bgImage + ".jpg";

		
		 	}
		 }



		//event handling
		[].forEach.call(pokeImg, function(bbk) {
			bbk.addEventListener('click', makeRequest, false);
		});

})();