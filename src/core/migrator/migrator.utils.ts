import { NpmrcData, YarnrcKeys } from './migrator.types';

export function buildYarnKeys(npmrcData: NpmrcData): YarnrcKeys {
  return Object.keys(npmrcData).reduce((acc: any, key) => {
    if (!key.startsWith('/')) {
      return acc;
    }

    const domain = key.split('/:_authToken')[0];
    const tokenData = npmrcData[key].split('NpmToken.');
    const tokenValue = tokenData.length > 1 ? tokenData[1] : tokenData[0];

    acc[domain] = {
      npmAlwaysAuth: true,
      npmAuthToken: tokenValue,
    };

    return acc;
  }, {});
}
