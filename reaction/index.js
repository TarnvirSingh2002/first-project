import {a} from "./one.js"//if we are using default then we don't need {} else we need it.
class b extends a{
    constructor(aa,bb,k){
        super(aa,k);
        this.bb=bb;
    }
    k(){
        console.log(this.bb);
    }
} 
let w=new b(6,4,8);
console.log(w.g());
console.log(w.k());
console.log(w.l());
