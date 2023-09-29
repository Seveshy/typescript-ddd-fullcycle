import CreateProductUsecase from "./create.product.usecase";

const input = {
  name: "John",
  price: 10.0,
  type: "a",
};

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit teste create product use case", () => {
  it("should create a customer", async () => {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUsecase(productRepository);

    const output = await productCreateUseCase.execute(input);

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      price: input.price,
    });
  });

  it("should thrown an error when price is missing", async () => {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUsecase(productRepository);

    input.price = -1;

    await expect(productCreateUseCase.execute(input)).rejects.toThrow(
      "Price must be greater than zero"
    );
  });

  it("should thrown an error when name is missing", async () => {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUsecase(productRepository);

    input.name = "";

    await expect(productCreateUseCase.execute(input)).rejects.toThrow(
      "Name is required"
    );
  });
});
