class Student {
    constructor(name, age, course, isEnrolled = true) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.isEnrolled = isEnrolled;
    }
    // Method to display student information
    displayStudentInfo(){
        if (this.isEnrolled){
            return `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
        } else {
            return `${this.name} is not currently enrolled`;
        }
    }

    // method to drop  course
    dropCourse(){
        if (this.isEnrolled){
            this.isEnrolled = false;
            return `${this.name} has dropped the course ${this.course}`;
        } else{
            return `${this.name} is not enrolled in any course`;
        }
    }

    // method to enroll in a course
    reenroll(){
        if (!this.isEnrolled){
            this.isEnrolled = true;
            return `Student ${this.name} has been re-enrolled in the course ${this.course}`;
        } else {
            return `${this.name} is already enrolled in the course ${this.course}`;
        }
    }
}
const student = new Student ("Dave Padon", 23, "Computer Engineering"); // Output


document.getElementById("demo").innerHTML = student.displayStudentInfo(); // display

// drop course button functionality
document.getElementById("dropBtn").addEventListener("click", function(){
    alert("Dropping course...");
    const message = student.dropCourse();
    document.getElementById("demo").innerHTML = message;
})
// reenroll button functionality
document.getElementById("reBtn").addEventListener("click", function(){
    alert("Re-enrolling...");
    const message = student.reenroll();
    document.getElementById("demo").innerHTML = message;
})