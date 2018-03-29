if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position);
		var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
		var mapOptions = {
			center: myLatLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.roadmap
		};
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map
		});
	});
}
