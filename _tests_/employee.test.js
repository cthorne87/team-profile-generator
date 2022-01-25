const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should instantiate Employee instances", () => {
    const obj = new Employee();
    expect(typeof(obj)).toBe("object");
  });
});

describe("Employee", () => {
  it("should initialize empName as a property", () => {
    const employeeName = "Phillip";
    const obj = new Employee(employeeName);
    expect(obj.empName).toBe(employeeName);
  });
}); 
    
describe("Employee", () => {
  it("should initialize id as a property", () => {
    const idNumber = 34;
    const obj = new Employee("Phillip", idNumber);
    expect(obj.id).toBe(idNumber);
  });
}); 

describe("Employee", () => {
  it("should initialize email as a property", () => {
    const emailAddress = "phillip@gmail.com";
    const obj = new Employee("Phillip", 34, emailAddress);
    expect(obj.email).toBe(emailAddress);
  });
});

describe("getEmpName", () => {
  it("should return the value of the empName property", () => {
    const obj = new Employee("Phillip", 34, "phillip@gmail.com");
    expect(obj.getEmpName()).toBe(obj.empName);
  });
});

describe("getId", () => {
  it("should return the value of the id property", () => {
    const obj = new Employee("Phillip", 34, "phillip@gmail.com");
    expect(obj.getId()).toBe(obj.id);
  });
}); 

describe("getEmail", () => {
  it("should return the value of the email property", () => {
    const obj = new Employee("Phillip", 34, "phillip@gmail.com");
    expect(obj.getEmail()).toBe(obj.email);
  });
});

describe("getRole", () => {
  it("should return the set value for the getRole method in the Employee class", () => {
    const obj = new Employee("Phillip", 34, "phillip@gmail.com");
    expect(obj.getRole()).toEqual("Employee");
  });
}); 