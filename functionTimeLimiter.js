//var limitExecByInterval = function(fn, time) {
//    var lock, execOnUnlock, args;
//    return function() {
//        args = arguments;
//        if (!lock) {
//            lock = true;
//            var scope = this;
//            setTimeout(function(){
//                lock = false;
//                if (execOnUnlock) {
//                    args.callee.apply(scope, args);
//                    execOnUnlock = false;
//                }
//            }, time);
//            return fn.apply(this, args);
//        } else execOnUnlock = true;
//    }
//}






Function.prototype.functionLimitByTime = function(time){
    var arg = [],lock = false,fn = this;
    return function(){
        arg = arguments;
        if(!lock){
            lock = true;
            setTimeout(function(){
                lock = false;
            },time);
            return fn.apply(this,arg);
        }
    }
}

function nikita(){
    console.log("Hello!!!");
    var x = 2;
    return x;
}

nikita = nikita.functionLimitByTime(100);