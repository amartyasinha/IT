var student = {
    "name": "amartya",
    "age": 20
}

var stu = new Object();

stu.name = "Amartya Sinha"
stu.age = 20


console.log(student.age)

function myStu(name, age) {
    this.name = name
    this.age = age
}

var roll1 = myStu("Mr. Amartya", 21);