import * as shell from 'gulp-shell'

import Config from '../../config';


export = shell.task(Config.EXEC);
