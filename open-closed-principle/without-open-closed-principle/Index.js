function anOver(over){
    
    let total_run = 0

    over.map(score => {
        switch (score){
            case 1:
                total_run = total_run + score;
                break;
            case 2:
                total_run = total_run + score;
                break;
            case 3:
                total_run = total_run + score;
                break;
            case 4:
                total_run = total_run + score;
                break;
            case 6:
                    total_run = total_run + score;
                    break;
            case 'WD':
                total_run = total_run + 1;
                break;
            case 'NB':
                total_run = total_run + 1;
                break;
        }
    })

    console.log(total_run)
}

const balls = [4, 0, 1, 6, 0, 'WD', 'NB']

anOver(balls)
