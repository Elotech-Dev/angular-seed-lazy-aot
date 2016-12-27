import { join } from 'path';
import { argv } from 'yargs';
import { writeFileSync } from 'fs';

export interface InjectableDependency {
  src: string;
}



export class SeedConfig {

  BOOTSTRAP_DIR = argv['app'] || 'app';

  /**
   * The directory of the applications tools
   * @type {string}
   */
  TOOLS_DIR = 'tools';

  /**
   * The directory of the tasks provided by the seed.
   */
  SEED_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'seed');

  /*THE COMMAND LINE TO EXECUTE ON ANGULAR CLI */

  EXEC = `ng ${argv['exec'] || 'serve'}`;

  /**
   * Project tasks which are composition of other tasks
   * and aim to override the tasks defined in
   * SEED_COMPOSITE_TASKS.
   */
  PROJECT_COMPOSITE_TASKS = join(process.cwd(), this.TOOLS_DIR, 'config', 'project.tasks.json');

  STYLES: string[] = [];

  SCRIPTS: string[] = [];

  ASSETS: string[] = ['assets', 'favicon.ico'];

  /**
   * Seed tasks which are composition of other tasks.
   */
  SEED_COMPOSITE_TASKS = join(process.cwd(), this.TOOLS_DIR, 'config', 'seed.tasks.json');


  createAngularCliSettings = () => {

    const jsonSettings = {
      'project': {
        'version': '1.0.0-beta.24',
        'name': 'elotech-angular-cli'
      },
      'apps': [
        {
          'root': 'src',
          'outDir': `dist/${this.BOOTSTRAP_DIR}`,
          'assets': this.ASSETS,
          'index': 'index.html',
          'main': `${this.BOOTSTRAP_DIR}/main.ts`,
          'test': 'test.ts',
          'tsconfig': 'tsconfig.json',
          'prefix': this.BOOTSTRAP_DIR,
          'mobile': false,
          'styles': this.STYLES,
          'scripts': this.SCRIPTS,
          'environments': {
            'source': `${this.BOOTSTRAP_DIR}/environments/environment.ts`,
            'dev': `${this.BOOTSTRAP_DIR}/environments/environment.ts`,
            'prod': `${this.BOOTSTRAP_DIR}/environments/environment.prod.ts`
          }
        }
      ],
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
  }
};

