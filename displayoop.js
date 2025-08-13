 class Dave{ 
    constructor(age, course, girlfriend){
        this.age = age;
        this.course = course;
        this.girlfriend = girlfriend;
    }

    displayInfo(){
        return `Dave is ${this.age} years old, got a  degree in ${this.course}, and the name of his girlfriend is ${this.girlfriend}.`;
    }
  // End of class Dave  
 }

 const dave = new Dave (23, "Computer Engineering", "Fria");
 document.getElementById("demo").innerHTML = dave.displayInfo();