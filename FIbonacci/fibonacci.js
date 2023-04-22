
function fibs(num) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    if (num > 2){
        for( let i = 2; i < num; i++){
            arr[i] = arr[i-2] + arr [i - 1] 
        }
    }    
    return arr;
}

function fibsReca(num){
    if (num == 1 ){
        return 0
    }
    if (num == 2 ){
        return 1
    }   
    return  fibsRec(num-2) + fibsRec(num-1);
   
}

function fibsRec(num){

    if (num == 1 ){
        return [0]
    }
    if (num == 2 ){
        return [0 , 1]
    }   
    let arr  = fibsRec(num - 1)

    arr.push ( arr[arr.length - 1] + arr[arr.length - 2] )


    return  arr ;
   
}

console.log(fibsRec(8))