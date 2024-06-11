export class Equipment {
  constructor(
    public equipmentId: string,
    public name: string,
    public amount: number,
    public quantity: number,
    public vendor: string,
    public description: string,
    public address: string,
    public contact: string,
    public dateOfImport: Date,
    public gymId: string,
  ) {}
}
