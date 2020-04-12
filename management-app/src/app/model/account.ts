import { Deserializable } from "./deserializable";

export class Account implements Deserializable {
  name: string;
  description: string;

  deserialize(input: any): this {
    Object.assign(input, this);
    return this;
    throw new Error("Method not implemented.");
  }
}
