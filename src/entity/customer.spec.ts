import Address from "./address";
import Customer from "./customer";

describe("Customer unit test", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrowError("Id is required");
  });
  it("Should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");
    }).toThrowError("Name is required");
  });
  it("Should change name", () => {
    const customer = new Customer("123", "John");
    customer.changeName("Jane");
    expect(customer.name).toBe("Jane");
  });
  it("Should activate customer", () => {
    const customer = new Customer("1", "Customer 1");
    const address = new Address("Street", 1, "56456-55", "São Paulo");
    customer.Address = address;

    expect(customer.isActivate()).toBe(false);
  });
  it("Should desactivate customer", () => {
    const customer = new Customer("1", "Customer 1");

    customer.desactivate();

    expect(customer.isActivate()).toBe(false);
  });
  it("Should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("1", "Customer 1");

      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);  
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);  
    expect(customer.rewardPoints).toBe(20);

  });
});
