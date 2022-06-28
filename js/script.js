const API_KEY = "";
	const city     = "nairobi";
	const unit     = "F";
	const unit_map = "imperial"

	const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

	function updateDateInfo() {
		var d = new Date;
		var year = d.getFullYear();
		var month = monthNames[ d.getMonth() ];
		var date = d.getDate();
		var day = dayNames[ d.getDay() ];

		var dateSting = month + ' ' + date + ', ' + year;

		document.getElementById( 'day' ).innerHTML = day;
		document.getElementById( 'date' ).innerHTML = dateSting;
	}

	function updateWeatherInfo() {
		fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit_map}&APPID=${API_KEY}` )
		.then( response => response.json() ).then( data => {
			document.getElementById( 'desc' ).innerHTML = data['weather'][0]['main'];
			document.getElementById( 'temp' ).innerHTML = Math.round( data['main']['temp'] );
		} )
	}

	updateDateInfo();
	updateWeatherInfo();

	setTimeout( updateDateInfo, 30 * 60 * 1000 );
	setTimeout( updateWeatherInfo, 5 * 60 * 1000 );