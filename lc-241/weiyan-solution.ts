function diffWaysToCompute(expression: string): number[] {
	if(!expression.length) return [0];
	const result = [];

	for(let idx = 0; idx < expression.length; idx++){
			const char = expression[idx];
			if(char === "+" || char === "-" || char === "*"){
		//recurse
					const left = diffWaysToCompute(expression.substring(0, idx));
					const right = diffWaysToCompute(expression.substring(idx+1));
					//compute
					for(let leftVal of left){
							for(let rightVal of right){
								 switch(char){
									case "+": 
												 result.push(leftVal + rightVal);
												 break;
									case "-": 
												 result.push(leftVal - rightVal);
												 break;
									default: 
												 result.push(leftVal * rightVal);
												 break;
									} 
							}
					}  
			}
	}
	if(!result.length) return [parseInt(expression)]
	return result
};
