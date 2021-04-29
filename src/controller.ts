import { Migrator } from './core/migrator';
import { CommandType } from './types/command.types';

export class Controller {
  private migrator: Migrator;

  constructor() {
    this.migrator = new Migrator();
  }

  public async run(command: CommandType, options: Record<string, any>): Promise<void> {
    if (!command || command !== CommandType.migrate) {
      throw new Error('Unknown command');
    }

    return this.migrator.run(options);
  }
}
