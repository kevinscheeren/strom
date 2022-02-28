import type { Arguments, CommandBuilder } from "yargs";
import { exec } from "../utils/git";
import { error, info, warn } from "../utils/output";

type Options = {};

export const command: string = "init";
export const desc: string = "Initialize repository with the CGit workflow";

export const handler = async (argv: Arguments<Options>): Promise<void> => {
  await exec("checkout -b develop master");
  await exec("push origin develop");
  info("Workflow Initialized");
  process.exit(0);
};
