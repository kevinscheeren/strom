import type { Arguments, CommandBuilder } from "yargs";
import { exec } from "../utils/git";
import { error, info } from "../utils/output";

type Options = {
  name: string;
  action: string;
};

export const command: string = "hotfix <action> <name>";
export const desc: string = "Start or close the hotfix with the name <name>";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .positional("action", {
      type: "string",
      demandOption: true,
      choices: ["start", "finish"],
    })
    .positional("name", { type: "string", demandOption: true });

export const handler = async (argv: Arguments<Options>): Promise<void> => {
  const { action, name } = argv;

  switch (action) {
    case "start":
      await start(name);
      break;
    case "finish":
      await finish(name);
      break;
    default:
      error("Unexpected Exception");
  }
  process.exit(0);
};

const start = async (name: String): Promise<void> => {
  await exec(`checkout -b hotfix/${name} master`);
  await exec(`push origin hotfix/${name}`);
  info(`hotfix '${name}' created!`);
};

const finish = async (name: String): Promise<void> => {
  await exec(`checkout master`);
  await exec(`merge hotfix/${name}`);
  await exec("push origin master");
  await exec(`checkout develop`);
  await exec(`merge hotfix/${name}`);
  await exec("push origin develop");
  await exec(`push origin :hotfix/${name}`);
  await exec(`branch -D hotfix/${name}`);
  info(`hotfix '${name}' closed!`);
};
