//    JS高阶函数_练习 主要是利用数组自带的reduce函数,另外几个数组用的高阶函数为map(),filter(),sort()
//    主要特点是以函数为参数,这样就可以对数组或元素执行不同的操作
//    为了灵活，没有对参数函数作内嵌处理


function _sum_ (x , y) {
    return x + y
}

function _multi_ (x , y) {
    return x * y
}

function _foo_ (x, y) {

   if (!y) {
       return x
   } else if (x) {
       var arr_new = []
       return arr_new.concat(x).concat(y)
   } else {
       return 'You give a null arg.'
   }
}


function reduce_func (arr,f) {
    return arr.reduce(f)
}

function each_slice (arr,f) {
    if (!f) {   
        f = _foo_
    }
    var arr_new = []
    for (var i =0; i<arr.length; i++) {
        //console.log(i)
        //console.log(arr.slice(0,i+1))
        var ff =f
        var mid = reduce_func(arr.slice(0,i+1),ff)
        arr_new.push(mid)
        //console.log(mid)
    }
     return arr_new
}

function num_range (x, type) {
    var arr = []
    for ( i = 0 ; i<= x; i++ ){
        arr.push(i)
    }
    
    //  选择循环
    switch (type) {
        case '1':
            arr.shift()
            break
        case ')':
            arr.pop()
            break
        default:
    }
    return arr
}


var arr_1 = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1]
var x_ = 10

console.log(reduce_func(each_slice(arr_1,_sum_),_sum_))
console.log(num_range(x_,'1'))
