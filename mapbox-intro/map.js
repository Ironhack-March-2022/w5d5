mapboxgl.accessToken = 'pk.eyJ1Ijoiam5yZG1ubiIsImEiOiJja3c2ODdxbGQwbnVnMm5samhzOWpxeWVxIn0.DT3dC0IA9Sf2YlTGncuxOA';
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/jnrdmnn/ckl1aoosu0afb17r27yya1ti5', // style URL
	center: [13.404954, 52.520008], // starting position [lng, lat]
	zoom: 9, // starting zoom
	// pitch: 100
});

const nav = new mapboxgl.NavigationControl()
map.addControl(nav, 'top-left')

// setting a popup
const popup = new mapboxgl.Popup({
	closesButton: true
})

const coords = [
	[13.405, 52.52],
	[13.6, 52.6]
]

coords.forEach(coord => {
	new mapboxgl.Marker({
		color: 'green',
	}).setLngLat(coord)
		.addTo(map)
})

// popup.setLngLat([13.453281, 52.5329816])
// 	.setHTML('<h1>Hello</h1>')
// 	.addTo(map)

// new mapboxgl.Marker({
// 	color: 'red',
// 	draggable: true
// }).setLngLat([13.453281, 52.5329816])
// 	.addTo(map)
// 	.on('dragend', event => console.log(event.target._lngLat))

// function addMarker(event) {
// 	new mapboxgl.Marker({
// 		color: 'red',
// 	}).setLngLat(event.lngLat)
// 		.addTo(map)
// }

// map.on('click', addMarker)


