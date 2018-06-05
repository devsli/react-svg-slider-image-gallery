import React from 'react';

export default ({images, animation, style}) => {
	const params = images.map((url, i) => `f${1+i}=${url}`).join('&');
	return (
		<object type="image/svg+xml"
			data={animation.src + '?' + params}
			style={style} />
	);
};
