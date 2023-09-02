import Address from "./address";

class Custumer {
  _id: string;
  _name: string;
  _address: Address;
  _active: boolean = false;

  constructor(id: string) {
    this._id = id;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  desactivate() {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}
