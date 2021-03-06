import React from 'react';
import PropTypes from 'prop-types';

import SVGalleryLayer from './SVGalleryLayer';
import * as styles from './SVGallery.module.css';

function arrayRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
};

export default class SVGallery extends React.Component {
	static propTypes = {
		images: PropTypes.array.isRequired,
		delay: PropTypes.number,
		width: PropTypes.string.isRequired,
		height: PropTypes.string.isRequired
	};

	static defaultProps = {
		delay: 2
	};

	lastImageIdx = 0;

	transitions = [
		{ src: require('./gears/1-1.svg'), id: '1-1', images: 1, duration: 2 },
		{ src: require('./gears/1-2.svg'), id: '1-2', images: 1, duration: 7 },
		{ src: require('./gears/1-3.svg'), id: '1-3', images: 2, duration: 7 },
		{ src: require('./gears/1-4.svg'), id: '1-4', images: 8, duration: 8 },
		{ src: require('./gears/1-5.svg'), id: '1-5', images: 4, duration: 7 },
		{ src: require('./gears/1-6.svg'), id: '1-6', images: 3, duration: 7 },
		{ src: require('./gears/1-7.svg'), id: '1-7', images: 12, duration: 8 },
		{ src: require('./gears/2-1.svg'), id: '2-1', images: 2, duration: 12 },
		{ src: require('./gears/2-2.svg'), id: '2-2', images: 4, duration: 8 },
		{ src: require('./gears/2-3.svg'), id: '2-3', images: 8, duration: 5 },
		{ src: require('./gears/3-1.svg'), id: '3-1', images: 4, duration: 12 },
		{ src: require('./gears/3-2.svg'), id: '3-2', images: 7, duration: 11 },
	];

	state = {
		layers: []
	}

	constructor(props) {
		super(props);

		this.nextSlide = this.nextSlide.bind(this);
	}

	get nextImage() {
		let img = this.props.images[this.lastImageIdx++];
		if (this.lastImageIdx >= this.props.images.length) {
			this.lastImageIdx = 0;
		}
		return img;
	}

	nextSlide() {
		let { layers } = this.state;

		let animation = arrayRandom(this.transitions);
		let images = [];
		for (let i = 0; i < animation.images; i++) {
			images.push(this.nextImage);
		}

		let next = {
			key: (new Date()).valueOf(),
			animation, images
		};

		if (layers.length > 1) {
			layers.shift();
		}

		this.setState({
			layers: layers.concat([next])
		});

		this.sliderTimeout = setTimeout(this.nextSlide,
			(animation.duration + this.props.delay) * 1000);
	}

	componentDidMount() {
		this.nextSlide();
	}

	componentWillUnmount() {
		clearTimeout(this.sliderTimeout);
	}

	render() {
		let { layers } = this.state;
		let { width, height } = this.props;
		let classNames = 'react-svg-slider-image-gallery';
		if (this.props.className) {
			classNames += ' ' + this.props.className;
		}

		return (
			<div className={classNames} style={{ width, height }}>
				{layers.map(l => (
					<SVGalleryLayer
						key={l.key}
						animation={l.animation}
						images={l.images}
						style={{ width, height }} />
				)).reverse()}
			</div>
		);
	}
}
