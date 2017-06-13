import React from 'react';
import { SVGallery } from './SVGallery';

export default class DemoApp extends React.Component {
	render() {
		let images = [
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Rock-Evening-Nature-Landscape-Rocks-Canyon-River-1740973.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Green-Man-Nature-Bike-Old-471192.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Waterfall-Isle-Of-Skye-Skye-Nature-Scotland-913846.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Green-Natural-Nature-Forest-Foliage-Tree-2262234.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Bach-Nature-Water-Trees-Landscape-Glade-Forest-2205421.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Outdoors-Trees-Nature-Woods-Forest-Path-1868028.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/The-Background-The-Harmony-Pyramid-Zen-Yoga-Nature-1846670.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Bach-Nature-Water-Tree-Landscape-River-Panorama-2147288.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Green-Outdoors-Rainforest-Forest-Shrubs-Nature-2123393.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Landscape-Summit-Austria-Nature-Mountain-Alpe-1880906.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Chestnut-Away-Nature-Avenue-Chestnut-Avenue-Trees-2157381.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Park-Outdoor-Nature-Green-Season-Green-Background-1072828.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Roots-Tree-Trunk-Forest-Forest-Floor-Trunk-Nature-569275.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Nature-River-Summer-Beautiful-Tree-Tourism-View-1961972.jpg',
			'http://maxpixel.freegreatpicture.com/static/photo/1x/Mood-Germany-Nature-Autumn-Landscape-Trees-Forest-2033331.jpg',
			'https://www.nps.gov/mima/learn/nature/images/kettlehole-wet-meadow-1.jpg',
			'http://www.publicdomainpictures.net/pictures/30000/nahled/a-reflection-of-nature.jpg'
		];

		return (
			<div>
				<SVGallery
					images={ images } width="640px" height="480px" />
			</div>
		);
	}
}
