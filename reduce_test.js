//    JS高阶函数_练习 主要是利用数组自带的reduce函数,另外几个数组用的高阶函数为map(),filter(),sort()
//    主要特点是以函数为参数,这样就可以对数组或元素执行不同的操作
//    为了灵活，没有对参数函数作内嵌处理


function _sum_ (x , y) { // reduce会依次对数组里的每两个元素进行迭代处理，所以作为参数的函数必须是两个参数值
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
       return arr_new.concat(x).concat(y) // 这里用concat()做数组扁平化处理,x和y被当作一组参数合并到数组arr_new
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
        
        //reduce_func()定义在函数体外，所以不能直接拿到参数f,需要赋值一个新参数
        //array对象的slice()跟两个参数，第一个是开始index，另一个是结束位置，注意会取到结束位置前一个元素
        var mid = reduce_func(arr.slice(0,i+1),ff) 
        arr_new.push(mid)
        //console.log(mid)
    }
     return arr_new
}

function num_range (x, type) {
    var arr = []
    // for (var i in arr) {} 返回的i为字符串 ，切记！！！
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
