import SendEmailWhenProductIsCreateHandler from "../product/handler/send-email-when-product-is-created.handler";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tests", () => {
  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreateHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"]
    ).toBeDefined();
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"].length
    ).toBe(1);
  });
});
