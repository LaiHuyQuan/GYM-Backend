export class ServiceHistory {
  constructor(
    public id: number,
    public serviceDate: Date,
    public serviceName: string,
    public description: string,
    public memberId: number,
  ) {}
}
