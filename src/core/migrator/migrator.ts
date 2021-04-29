import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';
import { parse } from 'ini';
import { stringify } from 'yaml';

import { Command } from '../commands';
import { MigratorOptions, NpmrcData } from './migrator.types';
import { buildYarnKeys } from './migrator.utils';

export class Migrator implements Command {
  private homePath: string;

  constructor() {
    this.homePath = process.env.HOME || process.env.USERPROFILE || homedir();
  }

  public async run(options: MigratorOptions): Promise<void> {
    const { force = false } = options;

    console.info('🚀 Start migration process');

    const yarnrcPath = join(this.homePath, '.yarnrc.yml');
    console.info(`▶ Check ${yarnrcPath}`);
    if (!force && existsSync(yarnrcPath)) {
      console.error(`${yarnrcPath} is exist.`);
      throw new Error(`${yarnrcPath} is exist.`);
    }

    const npmData = this.fetchNpmData();

    console.info('▶ Convern npm keys to yarn format');
    const npmRegistries = buildYarnKeys(npmData);

    console.info('▶ Save .yarnrc.yml data');
    const yarnContent = stringify({ npmRegistries });
    writeFileSync(yarnrcPath, yarnContent);

    console.info('✅ Operation is completed');
  }

  protected fetchNpmData(): NpmrcData {
    const npmrcPath = join(this.homePath, '.npmrc');
    console.info(`▶ Check ${npmrcPath}`);
    if (!existsSync(npmrcPath)) {
      console.error(`${npmrcPath} isn't exist.`);
      throw new Error(`${npmrcPath} isn't exist.`);
    }

    console.info('▶ Parse .npmrc data');
    return parse(readFileSync(npmrcPath, 'utf-8'));
  }
}
