import { randomUUID } from "node:crypto";

export class Account {
  constructor({lastName, firstName, id, creationDate}) {
    this.id = id ?? randomUUID();
    this.lastName = lastName;
    this.firstName = firstName;
    this.creationDate = creationDate ?? new Date();
  }

  

}
