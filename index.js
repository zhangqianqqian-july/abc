var foo = 1;
function fn(){
    var foo;
    console.log(foo);
    foo=2;
    console.log(foo);
    
}
fn()

var Status={
    count:1,
    getCount:function(){
        return this.count;
    }
}
alert(Status.getCount()); // 1
var func = Status.getCount;
alert(func()); // underfind