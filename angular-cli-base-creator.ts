import { writeFileSync } from 'fs';

export const createAngularCliSettingsFor = (bootstrap_dir: string) => {

  const jsonSettings = {
    'project': {
      'version': '1.0.0-beta.24',
      'name': 'play-cli'
    },
    'apps': [
      {
        'root': 'src',
        'outDir': `dist/${bootstrap_dir}`,
        'assets': [
          'assets',
          'favicon.ico'
        ],
        'index': 'index.html',
        'main': `${bootstrap_dir}/main.ts`,
        'test': 'test.ts',
        'tsconfig': 'tsconfig.json',
        'prefix': bootstrap_dir,
        'mobile': false,
        'styles': [
          'styles.css'
        ],
        'scripts': [],
        'environments': {
          'source': `${bootstrap_dir}/environments/environment.ts`,
          'dev': `${bootstrap_dir}/environments/environment.ts`,
          'prod': `${bootstrap_dir}/environments/environment.prod.ts`
        }
      }
    ],
    'addons': [],
    'packages': [],
    'e2e': {
      'protractor': {
        'config': './protractor.conf.js'
      }
    },
    'test': {
      'karma': {
        'config': './karma.conf.js'
      }
    },
    'defaults': {
      'styleExt': 'css',
      'prefixInterfaces': false,
      'inline': {
        'style': false,
        'template': false
      },
      'spec': {
        'class': false,
        'component': true,
        'directive': true,
        'module': false,
        'pipe': true,
        'service': true
      }
    }
  };
  writeFileSync('angular-cli.json', JSON.stringify(jsonSettings, null, 4));

};
