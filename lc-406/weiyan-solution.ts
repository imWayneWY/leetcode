function reconstructQueue(people: number[][]): number[][] {
	people.sort((p1, p2) => p1[0] !== p2[0] ? p2[0] - p1[0] : p1[1] - p2[1]);
	
	const ans = [people[0]];
	
	for (let i=1; i<people.length; i++) {
			const rank = people[i][1];
			ans.splice(rank, 0 ,people[i]);
	}
	
	return ans;
};
