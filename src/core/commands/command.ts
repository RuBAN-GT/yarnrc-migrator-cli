export interface Command {
  run(options: any): Promise<void>;
}
