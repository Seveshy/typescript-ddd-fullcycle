import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit test", () => {
  it("Should throw error when address id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });
  it("Should throw error when address customerId is empty", () => {
    expect(() => {
      let customerId = new Order("123", "", []);
    }).toThrowError("customerId is required");
  });
  it("Should throw error when address items are required", () => {
    expect(() => {
      let customerId = new Order("123", "123", []);
    }).toThrowError("Items are required");
  });
  it("Should calculate total", () => {
    const item = new OrderItem("i1", "Item 1", 100);
    const item2 = new OrderItem("i2", "Item 2", 200);

    const order = new Order("o1", "Order1", [item]);
    let total = order.total();
    expect(total).toBe(100);

    const order2 = new Order("o1", "Order1", [item, item2]);
    total = order2.total();
    expect(total).toBe(300);


  });
});
