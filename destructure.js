const person = {
  name: "Jack william",
  age: 23,
  job: "worker",
  sex: "male",
  phone: "0194587266",
};

// const {phone, name} = person;

// console.log(name, phone);

const complexObject = {
    name:'Md Imran',
    info:{
        job:'student',
        phone:'01944949678'
    }
}

const {job, phone} = complexObject.info;
console.log(job,phone);

const ages = [23,25,21,45,14,50];

const [fage, sage] = ages;
console.log(fage,sage);