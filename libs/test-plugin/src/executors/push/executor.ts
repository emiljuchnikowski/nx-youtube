import type { ExecutorContext } from '@nrwl/devkit';
import runCommands from "@nrwl/workspace/src/executors/run-commands/run-commands.impl";

import { PushExecutorSchema } from './schema';

export default async function runExecutor(
  options: PushExecutorSchema, context: ExecutorContext
) {
  const root = context.workspace.projects[context.projectName].root;
  const imageName = `${options.name}:${options.tag}`;

  await runCommands({
    command: `docker build -t ${imageName} -f ${root}/Dockerfile .`,
    __unparsed__: [],
  }, context);

  await runCommands({
    command: `docker push ${imageName}`,
    __unparsed__: [],
  }, context);
}

