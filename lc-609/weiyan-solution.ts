function findDuplicate(paths: string[]): string[][] {
	const map = new Map();
	for (let i=0; i<paths.length; i++) {
			const arr = paths[i].split(" ");
			const path = arr[0];
			for (let j=1; j<arr.length; j++) {
					const [name, rest] = arr[j].split('(');
					const content = rest.slice(0, -1);
					const fileName = path + '/' + name;

					map.has(content) ? map.set(content, [...map.get(content), fileName]) : map.set(content, [fileName]);
			}
	}
	
	return Array.from(map.values()).filter(dirs => dirs.length > 1);
};
