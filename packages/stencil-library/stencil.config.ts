import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist-custom-elements',
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      outputType: 'standalone',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
