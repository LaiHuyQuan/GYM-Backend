export class Member {
  constructor(
    public user_id: string,
    public fullname: string,
    public username: string,
    public password: string,
    public gender: string,
    public dor: Date,
    public services: string,
    public amount: number,
    public paid_date: Date,
    public p_year: number,
    public plan: string,
    public address: string,
    public contact: string,
    public status: string,
    public gymId: string,
  ) {}
}
