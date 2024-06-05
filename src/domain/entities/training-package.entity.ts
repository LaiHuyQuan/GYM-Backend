export class TrainingPackage {
  constructor(
    public trainingPackageId: string,
    public name: string,
    public description: string,
    public duration: number, // Duration in days
    public sessions: number, // Number of individual sessions
    public price: number,
  ) {}
}
