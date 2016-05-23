
todayTemp = 0;
todayRainChance = 0;
todayCondition = "";

tomorrowMinTemp = 0;
tomorrowMaxTemp = 0;
tomorrowRainChance = 0;
tomorrowPrecip = 0;
tomorrowCondition = "";

i = 0;
diff = 0;

$.get('w.d', function(response) { 
	// WEATHER DATA FOR TODAY
	// Max tempreture
	i = response.indexOf('<em class="max">') + 16;
	todayTemp = response.substr(i,2);
	// Chance of rain
	i = response.indexOf('<em class="pop">') + 16;
	diff = response.indexOf('%',i) - i + 1;
	todayRainChance = response.substr(i,diff);
	// Condition
	i = response.indexOf('<p>') + 3;
	i = response.indexOf('<p>',i) + 3;
	diff = response.indexOf('.',i) - i + 1;
	todayCondition = response.substr(i,diff);
	// WEATHER DATA FOR TOMORROW
	// Min Tempreture
	i = response.indexOf('<em class="min">') + 16;
	tomorrowMinTemp = response.substr(i,2);
	// Max Tempreture
	i = response.indexOf('<em class="max">',i) + 16;
	tomorrowMaxTemp = response.substr(i,2);
	// amount of precipitation
	i = response.indexOf('<em class="rain">',i) + 17;
	diff = response.indexOf('mm',i) - i + 2;
	tomorrowPrecip = response.substr(i,diff);
	// Chance of rain
	i = response.indexOf('<em class="pop">',i) + 16;
	diff = response.indexOf('%',i) - i + 1;
	tomorrowRainChance = response.substr(i,diff);
	//condition
	i = response.indexOf('<p>',i) + 3;
	diff = response.indexOf('.',i) - i + 1;
	tomorrowCondition = response.substr(i,diff);

	$("#todayTemp").html(todayTemp);
	$("#todayCondition").html(todayCondition);
	$("#todayRainChance").html(todayRainChance);
	$("#tomorrowMinTemp").html(tomorrowMinTemp);
	$("#tomorrowMaxTemp").html(tomorrowMaxTemp);
	$("#tomorrowRainChance").html(tomorrowRainChance);
	$("#tomorrowPrecip").html(tomorrowPrecip);
	$("#tomorrowCondition").html(tomorrowCondition);
});

