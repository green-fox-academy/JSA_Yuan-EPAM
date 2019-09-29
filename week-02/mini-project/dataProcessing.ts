class DataProcessing {
    public output: number[][];

    constructor() {
        this.output = [];        
    }

    public readLine(line: string): number[] {
        let digits: number[] = [];
        let newLine = line.replace(/[\n+\s+]/g, "");
        for(let digit of newLine) {
            if (digit === '_') {
                digits.push(0);
            } else {
                digits.push(parseInt(digit));
            }
        }

        return digits;
    }

    public loadData(data: string): number[][] {
        if (data === undefined) { // Load data from input files   
            throw "No data to load!";
        } 
        let lines = data.split('\n');
        lines.forEach((line, idx) => {
            // console.log(`${idx}, ${line}`);
            this.output.push(this.readLine(line));
        });

        return this.output;
    }
}

export default DataProcessing;