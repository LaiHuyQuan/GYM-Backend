export class Equipment {
  constructor(
    public id: string,
    public name: string,
    public quantity: number,
    public dateOfImport: Date,
    public warrantyDate: Date,
    public origin: string,
    public status: string,
  ) {}
}
