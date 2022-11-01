class Score {
    
    constructor(targetRun){
        this.targetRun = targetRun;
        this.currentRun = 0;
    }

    makeRun(run){
        this.currentRun = this.currentRun + run;
        
        if(this.currentRun > this.targetRun){
            const logger = new Logger('Match Result : Win')
            logger.success()
        }else if(this.currentRun == this.targetRun){
            const logger = new Logger('Match Result : Draw ')
            logger.success()
        }else if(this.currentRun < this.targetRun){
            let need_run = parseInt(this.targetRun - this.currentRun);
            const logger = new Logger(`You Need ${need_run} More Runs to Win.`)
            logger.info()
        }
    }
}

class Logger {

    constructor(message){
        this.message = message;
    }

    error(){
        console.error(this.message);
        return true
    }

    success(){
        console.log(this.message);
        return true
    }

    info(){
        console.info(this.message);
        return true
    }
}


const match = new Score(195)
match.makeRun(100)
match.makeRun(50)
match.makeRun(50)