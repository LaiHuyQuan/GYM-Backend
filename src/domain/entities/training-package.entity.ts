export class TrainingPackage {
  constructor(
    public id: number,
    public name: string,
    public duration: number, // Duration in days
    public sessions: number, // Number of individual sessions
    public price: number,
  ) {}
}
