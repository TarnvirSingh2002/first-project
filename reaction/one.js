class b{
    constructor(jj){
        this.jj=jj;
    }
    l(){
        console.log(this.jj);
    }
}
class a extends b{
    constructor(aa,k){
        super(k);
        this.aa=aa;
    }
    g(){
        console.log(this.aa);
    }
}
export  {a};