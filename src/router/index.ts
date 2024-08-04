import { IRoute } from './types';

const modules = import.meta.globEager('./modules/*.ts');
function formatModules(_modules: any, result: IRoute[]) {
  Object.keys(_modules).forEach((key) => {
    const _default = _modules[key];
    const defaultModule = _default.default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });

  return result;
}

export const routes: IRoute[] = [...formatModules(modules, [])];
