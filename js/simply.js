// Simply.js
// Copyright (c) 2011, Jan Lindblom
// All rights reserved.
//
// https://github.com/janlindblom/simplyjs
//
// This file is released under the BSD license.
//
// @version 1.0

// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name simply.min.js
// ==/ClosureCompiler==

// getStaticGoogleMap - Insert static Google maps into an HTML page.
//
// @param coords - Coordinates where map will center and the marker be placed.
//                 Example: '62.39058,17.318482'.
// @param sizingDiv - Id of a DIV to use as the maximum width of the map.
//                    Example: 'wrapperDiv'
// @param targetDiv - Id of a DIV in which the map will be inserted.
//                    Example: 'mapDiv'
// @param linkto - An URL where to link when the map is clicked.
//                 Example: 'http://maps.google.com/'
function getStaticGoogleMap(coords,sizingDiv,targetDiv,linkto) {
	var geoloc = coords;
	var linkurl = linkto;

	// Check the pixel ratio
	var retina = window.devicePixelRatio > 1 ? true : false;
	// Parts of the call to Google API's
	var urlbase = 'http://maps.googleapis.com/maps/api/staticmap?center=';
	var urlrest = '&zoom=14&sensor=false&size=';
	var urltail = '&markers=color:red|label:A|';

	// Determine the size of the map
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

	// Insert the map into the HTML
	document.getElementById(targetDiv).innerHTML = '<a href="'+linkurl+'" target="_blank"><img width="'+showwidth+'" height="'+showheight+'" style="width: '+showwidth+'px; height: '+showheight+'px;" src="'+urlbase+geoloc+urlrest+size+urltail+geoloc+'" alt="Map" /></a>';
}