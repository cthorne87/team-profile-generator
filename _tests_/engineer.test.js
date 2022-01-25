const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should instantiate Engineer instances", () => {
    const obj = new Engineer();
    expect(typeof(obj)).toBe("object");
  });
});

describe("Engineer", () => {
  it("should initialize github as a property", () => {
    const gitHubUsername = "phill";
    const obj = new Engineer("Phillip", 34, "phillip@gmail.com", gitHubUsername);
    expect(obj.github).toBe(gitHubUsername);
  });
}); 
    
describe("getGithub", () => {
  it("should return the value of the github property", () => {
    const obj = new Engineer("Phillip", 34, "phillip@gmail.com", "phill");
    expect(obj.getGithub()).toBe(obj.github);
  });
});

describe("getRole", () => {
  it("should return the set value for the getRole method in the Engineer class", () => {
    const obj = new Engineer("Phillip", 34, "phillip@gmail.com", "phill");
    expect(obj.getRole()).toBe("Engineer");
  });
});