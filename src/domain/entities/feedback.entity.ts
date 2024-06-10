export class Feedback {
  constructor(
    public feedbackId: string,
    public feedback: string,
    public date: Date,
    public memberId: string,
    public staffId: string,
    public gymId: string,
  ) {}
}
