export class Registration {
  constructor(
    public id: number,
    public registrationDate: Date,
    public type: string, // E.g., "hourly", "monthly", etc.
    public status: string, // E.g., "active", "expired", etc.
    public expireDate: Date, // Expiry date of the current package
    public sessionsLeft: number, // Number of sessions left
    public memberId: number,
    public trainingPackageId: number,
  ) {}
}
