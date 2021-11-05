/*
    解题思路：
    1， 获取每个房间右侧heater和他的距离
    2， 获取每个房间左侧heater和他的距离
    3， Math.max(...res)
*/

function findRadius(houses: number[], heaters: number[]): number {
	houses.sort((h1, h2) => h1 - h2);
	heaters.sort((h1, h2) => h1 - h2);
	
	const res = new Array(houses.length).fill(Infinity);
	
	let pHouse=0, pHeater=0;
	
	while (pHouse < houses.length && pHeater < heaters.length) {
			if (houses[pHouse] <= heaters[pHeater]) {
					res[pHouse] = heaters[pHeater] - houses[pHouse];
					pHouse++;
			} else {
					pHeater++;
			}
	}
	
	pHouse = houses.length - 1;
	pHeater = heaters.length - 1;
	
	while (pHouse >= 0 && pHeater >= 0) {
			if (houses[pHouse] >= heaters[pHeater]) {
					res[pHouse] =  Math.min(houses[pHouse] - heaters[pHeater], res[pHouse]);
					pHouse--;
			} else {
					pHeater--;
			}
	}
	
	let radius = 0;

	for (let i=0; i<res.length; i++) {
			radius = Math.max(res[i], radius);
	}
	return radius;
};