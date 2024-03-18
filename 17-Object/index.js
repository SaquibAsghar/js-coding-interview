const age = 90;
const user = {
  firstName: "Saquib",
  lastName: "Asghar",
  age: 26,
  getFullName: function () {
    const { firstName, lastName } = this;
    function getUserAge() {
      console.log(this.age);
    }
    return getUserAge.call(this);
    // return getUserAge.bind(user)(); // correct
    // return `Fullname: ${firstName} ${lastName}`; //correct
  },
};

// return console.log(user.getFullName());

function User(name, age) {
  this.name = "";
  this.age = age;
  this.getName = function () {
    return `Name: ${name}`;
  };
  this.someRandomFunction = function () {
    console.log(this);
    this.someArrowFunction = () => {
      console.log("Inside the arrow function");
      console.log("Pointing to ", this);
    };
    this.someArrowFunction();
  };
}

const Saquib = new User("Saquib", 20);
console.log(Saquib.getName());
console.log(Saquib.someRandomFunction());
