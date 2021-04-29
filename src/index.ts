import { Command, flags } from '@oclif/command';

import { Controller } from './controller';
import { CommandType } from './types/command.types';

class YarnrcMigratorCli extends Command {
  public static description: string | undefined = 'Migrate your .npmrc data to Yarn V2 .yarnrc.yml.';

  public static flags: Record<string, any> = {
    force: flags.boolean({ char: 'f', default: false, description: 'Overwrite existing .yarnrc.yml' }),
  };

  public async run(): Promise<void> {
    const { flags } = this.parse(YarnrcMigratorCli);

    const controller = new Controller();
    controller.run(CommandType.migrate, flags);
  }
}

export = YarnrcMigratorCli;
