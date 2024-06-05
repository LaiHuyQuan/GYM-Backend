export class Registration {
  constructor(
    public registrationId: string,
    public registrationDate: Date,
    public expireDate: Date, // Expiry date of the current package
    public sessionsRemaining: number, // Number of sessions left
    // public memberId: number,
    // public trainingPackageId: number,
  ) {}
}
