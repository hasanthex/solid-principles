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

        }
    })

    return total_run;
}

const over_1 = [4, 0, 1, 6, 0, 2, 0]; // its ok for now
let runs = anOver(over_1);
console.log(`1st Over Run Taken : ${runs}`);

/**
* LET'S THINK
*
* After some times, came some changes.
* Changes is we have to add more options to our function.
* We need to add WD(Wide) and NB(No Ball) options too.
* For solve this problem we can add two switch statement and here is violate the Open-closed principle.
* Because Open-Closed Principle is Open for extension and Closed for modification.
* Here we modified our existing method (anOver) which broke the open-closed principle.
*/
const over_2 = [4, 0, 1, 4, 0, 'WD', 'NB', 1];
runs = anOver(over_2);
console.log(`2nd Over Run Taken : ${runs}`);
