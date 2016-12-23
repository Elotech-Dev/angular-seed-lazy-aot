import * as gulp from 'gulp';
import * as util from 'gulp-util';
import * as shell from 'gulp-shell'
import * as runSequence from 'run-sequence';
import { argv } from 'yargs';

import { createAngularCliSettingsFor } from './angular-cli-base-creator';


const BOOTSTRAP_DIR = argv['app'] || 'app';
const COMMAND = `ng ${argv['command'] || 'serve'}`;


gulp.task('ng.prepare.settings', (done: any) => {
  util.log(`Prepared settings for ${BOOTSTRAP_DIR} `);
  createAngularCliSettingsFor(BOOTSTRAP_DIR);
  done();
});

gulp.task('ng.execute.command', shell.task(COMMAND));


gulp.task('ng.execute.log', (done: any) => {
  util.log(`Try to execute "${COMMAND}"`);
  done();
});


gulp.task('ng.command', (done: any) => {
  runSequence('ng.prepare.settings', 'ng.execute.log', 'ng.execute.command',  done);
});
