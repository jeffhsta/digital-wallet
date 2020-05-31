export interface Event {
  readonly description: string;
  readonly datetime: Date;
}

export default interface Timeline {
  readonly userId: string;
  readonly events: Event[];
}
