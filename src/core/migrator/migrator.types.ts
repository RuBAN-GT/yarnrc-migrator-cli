export type NpmrcData = Record<string, any>;

export interface YarnrcDomain {
  npmAlwaysAuth: boolean;
  npmAuthToken: string;
}
export type YarnrcKeys = Record<string, YarnrcDomain>;

export interface MigratorOptions {
  force?: boolean;
}
