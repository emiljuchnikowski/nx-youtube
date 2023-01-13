import {
  readProjectConfiguration,
  generateFiles,
  Tree,
  formatFiles,
  installPackagesTask,
  joinPathFragments,
} from '@nrwl/devkit';
import * as path from 'path';
import { libraryGenerator } from '@nrwl/workspace/generators';

import { CreateFileGeneratorSchema } from './schema';


export default async function (tree: Tree, options: CreateFileGeneratorSchema) {
  await libraryGenerator(tree, { name: options.name });

  const libraryRoot = readProjectConfiguration(tree, options.name).root;

  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    options // config object to replace variable in file templates
  );

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree)
  };
}
