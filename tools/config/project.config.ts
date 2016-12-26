import { join } from 'path';
import { SeedConfig } from './seed.config';

export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();

    this.SCRIPTS = [
     // '../node_modules/jquery/dist/jquery.js'
    ];

    this.STYLES = [
      //  '../node_modules/bootstrap/dist/css/bootstrap.css'
    ];

  }

}
