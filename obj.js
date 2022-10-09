let menu={
    array1:["javascript","python","Ruby","languages","isChallenging","isRewarsing","difficulty","isFun"],
    array2:["Javascript","Python","Ruby","Go"],
    array3:[true,true,7,true],
    
    show(){
        menu.array1.forEach(function(item){
            console.log(item);
        })
        console.log(menu.array2);
        menu.array3.forEach(function(value){
            console.log(value);
        })
    }
};
menu.show();


