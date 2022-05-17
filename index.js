function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function fn(){
        console.log("this is a named function");
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log("this is an anonymous function")
}