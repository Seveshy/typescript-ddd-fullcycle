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
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);
    const item2 = new OrderItem("i2", "Item 2", 100, "p2", 2);

    const order = new Order("o1", "Order1", [item]);
    let total = order.total();
    expect(total).toBe(200);

    const order2 = new Order("o1", "Order1", [item, item2]);
    total = order2.total();
    expect(total).toBe(400);
  });
  it("Should throw error if the item less or equal zero", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item", 100, "p1", 0);
      const order = new Order("o1", "c1", [item]);
    }).toThrowError("Quantity must be greater than 0");
  });
});
