let p1_score=0;
let p2_score=0;
let dice_value1;
let dice_value2;
let count=0;

function dice_roll(){
    count = count + 1;
    dice_value1 = generate_a_random_number();
    dice_value2 = generate_a_random_number();
    picture_arrangement(dice_value1,dice_value2);
    if (count%2 == 1){
        p1_score_calculate(dice_value1,dice_value2);
    }
    else{
        p2_score_calculate(dice_value1,dice_value2);
    }
}

function generate_a_random_number(){
    let random = Math.floor((Math.random()*6)+1);
    return random;
}

function picture_arrangement(d1,d2){
    var image1 = document.getElementById('dice_pic1');
    var image2 = document.getElementById('dice_pic2');

    switch(d1){
        case 1:
            image1.src="dice_1.png";
            break; 
        
        case 2:
            image1.src="dice_2.png";
            break;

        case 3:
            image1.src="dice_3.png";
            break;

        case 4:
            image1.src="dice_4.png";
            break;

        case 5:
            image1.src="dice_5.png";
            break;

        case 6:
            image1.src="dice_6.png";
            break;
    }

    switch(d2){
        case 1:
            image2.src="dice_1.png";
            break; 
        
        case 2:
            image2.src="dice_2.png";
            break;

        case 3:
            image2.src="dice_3.png";
            break;

        case 4:
            image2.src="dice_4.png";
            break;

        case 5:
            image2.src="dice_5.png";
            break;

        case 6:
            image2.src="dice_6.png";
            break;
    }
        
}

function p1_score_calculate(d1,d2){
    let score=0;
    if (d1==d2){
        if(d1==1){
            p1_score = 0;
        }
        else{
            count=count-1;
        }
    }
    else{
        score = (d1+d2);
    }

    if (p1_score<=100){
        p1_score = p1_score + score;
    }
    else{
        p1_score = 0;
        p2_score = 0;
    }
    document.getElementById("p1_score").value = p1_score;
}

function p2_score_calculate(d1,d2){
    let score=0;
    if (d1==d2){
        if(d1==1){
            p2_score = 0;
        }
        else{
            count=count-1;
        }
    }
    else{
        score = (d1+d2);
    }

    if (p2_score<=100){
        p2_score = p2_score + score;
    }
    else{
        p1_score = 0;
        p2_score = 0;
    }
    document.getElementById("p2_score").value = p2_score;
}
