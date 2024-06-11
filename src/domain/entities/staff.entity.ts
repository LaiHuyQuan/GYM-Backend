export class Staff {
  constructor(
    public staffId: string,
    public username: string,
    public password: string,
    public email: string,
    public fullname: string,
    public address: string,
    public role: string, // Sale staff, care staff, personal coach, etc.
    public contact: string,
    public gender: string,
  ) {}
}
