class Score {
    
    constructor(targetRun){
        this.targetRun = targetRun;
        this.currentRun = 0;
    }

    makeRun(run){
        this.currentRun = this.currentRun + run;
        
        if(this.currentRun > this.targetRun){
            console.log(`Match Result : Win`);
        }else if(this.currentRun == this.targetRun){
            console.log(`Match Result : Draw `);
        }else if(this.currentRun < this.targetRun){
            let need_run = parseInt(this.targetRun - this.currentRun);
            console.log(`You Need ${need_run} More Runs to Win.`)
        }
    }
}

const match = new Score(195)
match.makeRun(100)
match.makeRun(50)
match.makeRun(50)