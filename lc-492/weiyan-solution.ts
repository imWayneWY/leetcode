function constructRectangle(area: number): number[] {
	let L = Math.ceil(Math.sqrt(area));
	while (area % L !== 0) {
			L++;
	}
	return [L, area/L];
};
