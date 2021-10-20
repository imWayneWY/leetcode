function checkValidString(s: string): boolean {
	//cmax counts the maximum open parenthesis, which means the maximum number of unbalanced '(' that COULD be paired.
 //cmin counts the minimum open parenthesis, which means the number of unbalanced '(' that MUST be paired.
	let cmin = 0, cmax = 0; //range [cmin, cmax]
	for(let i=0; i<s.length; i++) {
			const ch = s[i];
			if(ch == '('){
					cmax+= 1;//incrasing the maximum number of open parenthesis count
					cmin+= 1;//incrasing the minimum number of open parenthesis count
			} 
			else if(ch == ')'){
					cmax-= 1;//decreasing the maximum number of open parenthesis count and balancing 
					cmin-= 1;//decreasing the minimum number of open parenthesis count and balancing 
			} 
			else if(ch == '*') {//two possibility of * is that it can provide open parenthesis or close parenthesis 
					cmax+= 1;//incrasing the maximum number of open parenthesis count
					cmin-= 1;//balancing the minimum number of open parenthesis 
					//new range [cmin-1, cmax+1]
			}
			
			if(cmax < 0)//cmax will never be negative, to be balanced since number of open parentethesis cannot be less than the close parenthesis 
				return false;//if less returning false 
		
			cmin= Math.max(cmin, 0);//cmin cannot be less than 0, it must be greater than 0 
	}
	if(cmin == 0)//cmin is 0 at the end, to be balanced//all open parenthesis is balanced 
		 return true;
	return false;//else all open parenthesis is not balanced
};
