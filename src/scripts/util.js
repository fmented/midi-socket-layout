function scale(value, from, to) {
	var scale = (to[1] - to[0]) / (from[1] - from[0]);
	var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
	return (capped * scale + to[0]);
}

export {scale, randInt}

function randInt(lo, hi) {
    return ~~(Math.random()*(hi - lo)) + lo
}