// let year = 2000 ;

// const reminder = (year % 4);


// if you want make this function randomly then use " function "; 

function leapYear(year){

    const remainder = year % 4 ; 

    if( remainder == 0){

        return true ; 
    }else{

        return false ; 

    }
}

const check1999 = leapYear(1999);
console.log(check1999);

const check2000 = leapYear(2000);

console.log(check2000)
const check2002= leapYear(2002);

console.log(check2002); 
