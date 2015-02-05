function initialise(){var e=mw_map_vars.addressName,a=mw_map_vars.googleMapsLink,t=mw_map_vars.mapStyle,i=mw_map_vars.mapMarker,s=mw_map_vars.pin,l=mw_map_vars.pinImage,r=mw_map_vars.radiusDistance,o=1609.344;pluginUrl=mw_map_vars.pluginUrl;var n=new google.maps.LatLng(mw_map_vars.lat,mw_map_vars["long"]);currentLatLong=n;var p={zoom:parseInt(mw_map_vars.zoom),minZoom:0,maxZoom:20,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.RIGHT_TOP},center:n,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,panControl:!1,panControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP},mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,rotateControl:!1},y=new google.maps.Map(document.getElementById("map-wrapper"),p);if(google.maps.event.addDomListener(window,"resize",function(){y.setCenter(currentLatLong)}),"custom"==s)var m=new google.maps.MarkerImage(""+l,null,null,null,new google.maps.Size(parseInt(mw_map_vars.markerWidth),parseInt(mw_map_vars.markerHeight)));else var m=new google.maps.MarkerImage(pluginUrl+"/mw-business-details/image/map-marker.png",null,null,null,new google.maps.Size(46,71));var f=new google.maps.Marker({position:n,icon:m,map:y,title:"Click to view in Google Maps"});if("radius"==i){f.setVisible(!1),radiusCalc=o*r,console.log(radiusCalc);var g=new google.maps.Circle({map:y,radius:radiusCalc,fillColor:"#a54fee",strokeColor:"#CD0000",strokeOpacity:0});g.bindTo("center",f,"position")}var u=new google.maps.InfoWindow({content:"<h3>"+e+'</h3><p><a target="_blank" href="'+a+'"> View on Google Maps</a></p>'});if("show"==mw_map_vars.showInfoWindow?(u.open(y,f),google.maps.event.addListener(f,"click",function(){u.open(y,f)})):google.maps.event.addListener(f,"click",function(){u.open(y,f)}),"colourful"===t)var d=[{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"},{lightness:20}]},{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"road.local",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{hue:"#a1cdfc"},{saturation:30},{lightness:49}]},{featureType:"road.highway",elementType:"geometry",stylers:[{hue:"#f49935"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{hue:"#fad959"}]}];else if("grey"===t)var d=[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}];else if("pale"===t)var d=[{featureType:"water",stylers:[{visibility:"on"},{color:"#acbcc9"}]},{featureType:"landscape",stylers:[{color:"#f2e5d4"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"}]},{featureType:"administrative",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"road"},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{},{featureType:"road",stylers:[{lightness:20}]}];else if("custom"===t)var d=jQuery.parseJSON(mw_map_vars.customMap);y.setOptions({styles:d})}jQuery(document).ready(function($){$(window).scroll(function(){var e=$("#map-wrapper"),a=$(window).height(),t=e.offset().top,i=$(window).scrollTop(),s=t-a;e.length>0&&parseInt(i)>parseInt(s)&&e.children().length<1&&initialise()})});