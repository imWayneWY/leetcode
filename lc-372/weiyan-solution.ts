const mod = 1337
function superPow(a: number, b: number[]): number {
    if (b.length === 0) return 1;
    const lastBit = b.pop();
    
    const part1 = pow(a, lastBit);
    const part2 = pow(superPow(a, b), 10);
    
    return (part1 * part2) % mod;
};

function pow (x: number, n: number): number {
    if( n === 0)
    {
        return 1;
    } 
    x %= mod;
    return n % 2 === 0 ? pow(x*x, n/2) : x* pow(x*x, Math.floor(n/2)); 
}
