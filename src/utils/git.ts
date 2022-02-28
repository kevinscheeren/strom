import simpleGit from "simple-git";
import { error, info } from "./output";

export const exec = async (command: String): Promise<void> => {
  const git = simpleGit();
  const commands = command.split(" ");
  await git.raw(commands, (err, res) => {
    if (err) {
      error(err.message);
      process.exit(1);
    }
  });
};
