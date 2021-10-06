function exclusiveTime(n: number, logs: string[]): number[] {
	const isRunning = [parseInt(logs[0].split(":")[0])];
	let prevTime = 0;
	let prevStatus = "start";
	const ans = new Array(n).fill(0);
	
	for (let i=1; i<logs.length; i++) {
			const [thread, status, time] = logs[i].split(":");
			
			let timeDiff = parseInt(time) - prevTime;
			
			if (status === "end") {
					if (prevStatus === "start") timeDiff++;
					ans[parseInt(thread)] = ans[parseInt(thread)] + timeDiff;
					isRunning.pop();
			} else {
					if (prevStatus === "end") timeDiff--;
					ans[isRunning[isRunning.length-1]] = ans[isRunning[isRunning.length-1]] + timeDiff;
					isRunning.push(parseInt(thread));
			}
			
			prevTime = parseInt(time);
			prevStatus = status;
	}
	
	return ans;
};
