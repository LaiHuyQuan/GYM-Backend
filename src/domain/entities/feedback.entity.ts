export class Feedback {
  constructor(
    public id: string,
    public content: string,
    public date: Date,
    public memberId: string,
    public staffId: string,
  ) {}
}
