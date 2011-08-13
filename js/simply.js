/*
 * Simply.js
 */

/**
 * getStaticGoogleMap
 * @param coords
 * @param sizingDiv
 * @param targetDiv
 * @param linkto
 */
function getStaticGoogleMap(coords,sizingDiv,targetDiv,linkto) {
	var geoloc = coords;
	var linkurl = linkto;

	// Retina display?
	var retina = window.devicePixelRatio > 1 ? true : false;
	
	var urlbase = 'http://maps.googleapis.com/maps/api/staticmap?center=';
	var urlrest = '&zoom=14&sensor=false&size=';
	var urltail = '&markers=color:red|label:A|';
	
	var width = document.getElementById(sizingDiv).offsetWidth;
	width = Math.round(width - (width / 100) * 10);
	var height = width - Math.round(width / 4);
	var showheight = height;
	var showwidth = width;
	
	// Handle higher device pixel ratios (iPhone 4 has 2, Nexus S has 1.5)
	var multiplier = window.devicePixelRatio;
	if (retina) {
		width = width * multiplier;
		height = height * multiplier;
	}
	var size = width + 'x' + height;
	
	// Insert the map
	document.getElementById(targetDiv).innerHTML = '<a href="'+linkurl+'" target="_blank" rel="me"><img width="'+showwidth+'" height="'+showheight+'" style="width: '+showwidth+'px; height: '+showheight+'px;" src="'+urlbase+geoloc+urlrest+size+urltail+geoloc+'" alt="Map" /></a>';
}