function call() {
    //console.log(x); //undefined
    let x //var x
    x = 10
    console.log(x);//10
    for (let i = 0; i < 1; i++) {
        let x //var _x
        x = 20 //_x=20
        console.log(x);//20
        //console.log(_x)
    }
    console.log(x);//10

    firstInner() //<-- a declared function can be called even before the function declaration
    //function declaration
    function firstInner() {
        var x
        x = 30
        console.log(x);
    }
    //firstInner()

    //function expression
    //secondInner() <-- an expression function can't be called before expression itself
    var secondInner
    secondInner = function () {
        var x
        x = 30
        console.log(x);
    }
    secondInner()

    const y = 100
    //y = 200
    console.log(y);
}
call()