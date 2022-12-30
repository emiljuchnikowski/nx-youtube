import type { ExecutorContext } from '@nrwl/devkit';

import { EchoExecutorSchema } from './schema';

export default async function runExecutor(
  options: EchoExecutorSchema, context: ExecutorContext
) {
  console.log('project', context.projectName);
  console.log('config', context.workspace.projects[context.projectName]);

  console.log('echo', options.text);

  return {
    success: true
  };
}

