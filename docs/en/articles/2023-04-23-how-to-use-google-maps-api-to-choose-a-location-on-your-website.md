---
layout: doc
title: Step-by-Step Guide How to Use Google Maps API to Choose a Location on Your Website
description: The Google Maps JavaScript API allows developers to embed Google Maps in web pages using JavaScript. In this tutorial, we'll walk through how to use the API to display a map and allow the user to choose a location using the provided code.
---

# Step-by-Step Guide: How to Use Google Maps API to Choose a Location on Your Website

## Introduction

The Google Maps JavaScript API allows developers to embed Google Maps in web pages using JavaScript. In this tutorial, we'll walk through how to use the API to display a map and allow the user to choose a location using the provided code.

## Prerequisites

Before we get started, you'll need a Google Maps API key. To get one, follow the instructions in this guide: [Google Maps API](https://developers.google.com/maps/gmp-get-started#create-project)

## Step 1: Set up the HTML file

Create a new HTML file and save it with a name of your choice. In this tutorial, we'll call it "choose-location.html". Add the following code to the file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Choose Your Location</title>
</head>
<body>
    <!-- A div to contain the map -->
    <div id="map" style="height: 400px; width: 100%;"></div>

    <!-- Script to load the Google Maps API and create the map -->
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=Function.prototype"></script>
    <script>
        // Code to create the map goes here
    </script>
</body>
</html>
```

Replace YOUR_API_KEY in the script tag with your own API key.

## Step 2: Create a new map object

In the script tag, create a new map object using the `google.maps.Map` constructor. The first argument is the DOM element where the map will be displayed. In this case, it's the map `div` that's defined in the HTML code. The second argument is an object that sets the default options for the map. In the code provided, the center of the map is set to `(0, 0)`, and the default zoom level is set to `2`.

```js
var mapOptions = {
    center: new google.maps.LatLng(0, 0), // Default to center of the world
    zoom: 2 // Default zoom level
};

// Create a new map object in the "map" div with the default map options
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
```

## Step 3: Add geolocation support

The code checks if the user's browser supports geolocation. If it does, it uses the `navigator.geolocation.getCurrentPosition` method to get the user's current position. If it doesn't, it creates a marker at the center of the map.

```js
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // Code to create a marker at the user's current location goes here
    }, function() {
        // Code to create a marker at the center of the map goes here
    });
} else {
    // Code to create a marker at the center of the map goes here
}
```

## Step 4: Create a marker

Create a new marker using the `google.maps.Marker` constructor. The first argument is an object that sets the marker's options. In this case, the position of the marker is set to the user's current location (if available), or the center of the map (if geolocation is not supported). The draggable option is set to true, which allows the user to drag the marker to choose a new location.

```js
// If successful, create a marker at the user's current location
var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
var marker = new google.maps.Marker({
    position: userLatLng,
    map: map,
    draggable: true // Allow the user to drag the marker to choose a location
});

// If geolocation fails, create a marker at the center of the map
var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    draggable: true
});
```

## Step 5: Center the map

If the user's location is available, center the map on their location using the `map.setCenter` method. The zoom level is also set to `13` to provide more detail.

```js
// If successful, center the map on the user's location and zoom in for detail
map.setCenter(userLatLng);
map.setZoom(13);
```

## Step 6: Add a dragend event listener

Add an event listener to the marker's dragend event using the `google.maps.event.addListener` method. This event fires when the user finishes dragging the marker. The listener logs the latitude and longitude of the marker's new position to the console.

```js
google.maps.event.addListener(marker, "dragend", function() {
    // Log the latitude and longitude of the marker's new position to the console
    var latLng = marker.getPosition();
    console.log("Chosen location: " + latLng.lat() + ", " + latLng.lng());
});
```

## Step 7: Test the code

Save the HTML file and open it in a web browser. If everything is set up correctly, you should see a map displayed with a marker at the user's current location (if available), or at the center of the map (if geolocation is not supported). You can drag the marker to choose a new location, and the latitude and longitude of the new location will be logged to the console.

## Conclusion

In this tutorial, you learned how to use the Google Maps JavaScript API to display a map and allow the user to choose a location using the provided code. You can customize the map's options and add additional features by exploring the API documentation: [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview).