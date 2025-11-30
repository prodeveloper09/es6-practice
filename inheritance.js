class parents{
    constructor(fatherName){
        this.fatherName = "Md Masud";
    }
}

class child extends parents{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name+ " " + this.fatherName;
    }
}



const baby = new child("Md Imran");
const baby2 = new child("Mst Fatema");

console.log(baby.getFullName());
console.log(baby2.getFullName());