

// for(var index = 0; index < 10; index++) {
//     console.log(5 * index)
// }


var stop = false
var idx = 0

while(!stop){
    idx++

    if(idx === 10) {
        stop = true
        console.log(idx)
    }

}


do {
    idx--
    if(idx === 0){
        stop = false
        console.log(idx)
    }

} while (stop)


