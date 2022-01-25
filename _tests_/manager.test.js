const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should instantiate Manager instances", () => {
    const obj = new Manager();
    expect(typeof(obj)).toBe("object");
  });
});

describe("Manager", () => {
  it("should initialize officeNumber as a property", () => {
    const officeN = 8675309;
    const obj = new Manager("Phillip", 34, "phillip@gmail.com", officeN);
    expect(obj.officeNumber).toBe(officeN);
  });
}); 
    
describe("getOfficeNumber", () => {
  it("should return the value of the officeNumber property", () => {
    const obj = new Manager("Phillip", 34, "phillip@gmail.com", 8675309);
    expect(obj.getOfficeNumber()).toBe(obj.officeNumber);
  });
});

describe("getRole", () => {
  it("should return the set value for the getRole method in the Manager class ", () => {
    const obj = new Manager("Phillip", 34, "phillip@gmail.com", 8675309);
    expect(obj.getRole()).toBe("Manager");
  });
});