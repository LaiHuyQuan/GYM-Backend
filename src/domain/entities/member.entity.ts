export class Member {
  constructor(
    public memberId: string,
    public name: string,
    public memberType: string,
    public username: string,
    public password: string,
    public phone: string,
    public career: string,
    public birthday: string,
    public address: string,
    public registrationDate: Date,
    public expireDate: Date,
    public sessionsRemaining: number,
    public gymId: string,
  ) {}
}
