class b{
    constructor(jj){
        this.jj=jj;
    }
    l(){
        console.log(this.jj);
    }
}
export class a extends b{
    constructor(aa,k){
        super(k);
        this.aa=aa;
    }
    g(){
        console.log(this.aa);
    }
}