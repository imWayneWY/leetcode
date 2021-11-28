function findRightInterval(intervals: number[][]): number[] {
    const idxs = {};
    const starts = [];
    for (let i=0; i<intervals.length; i++) {
        const start = intervals[i][0];
        idxs[start] = i;
        starts.push(start);
    }
    
    starts.sort((a, b) => a-b);
    
    const findRightIdx = (end: number): number => {
        let low = 0, high = intervals.length-1;
        if (end > starts[starts.length - 1]) return -1;
        if (isFinite(idxs[end])) return idxs[end];

        while (low <= high) {
            const mid = low + Math.trunc((high - low) / 2);
            if (starts[mid] > end) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return idxs[starts[low]];
    }
    
    const ans = [];
    
    for (let i=0; i<intervals.length; i++) {
        const end = intervals[i][1];
        ans.push(findRightIdx(end));
    }
    
    return ans;
};