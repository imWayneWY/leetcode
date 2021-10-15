function candy(ratings: number[]): number {
	const ratingsLen = ratings.length;
	const ONE = 1;
	if (ratingsLen === ONE) {
			return ratingsLen;
	}


	const resultArray = new Array(ratingsLen);
	resultArray.fill(ONE);

	for (let i = 1; i < ratingsLen; i++) {
			if (ratings[i] > ratings[i - 1]) {
					resultArray[i] = resultArray[i - 1] + ONE;
			}
	}

	for (let j = ratingsLen - 2; j >= 0; j--) {
			if (ratings[j] > ratings[j + 1] && resultArray[j] <= resultArray[j + 1]) {
					resultArray[j] = resultArray[j + 1] + ONE;
			}
	}

	return resultArray.reduce((prev, current) => prev + current);
};
