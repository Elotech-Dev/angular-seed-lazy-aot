import * as gulp from 'gulp';
import * as util from 'gulp-util';
import * as shell from 'gulp-shell'
import * as runSequence from 'run-sequence';
import { argv } from 'yargs';

import { createAngularCliSettingsFor } from './angular-cli-base-creator';


const BOOTSTRAP_DIR = argv['app'] || 'app';
const EXEC = `ng ${argv['exec'] || 'serve'}`;


gulp.task('ng.prepare.settings', (done: any) => {
  util.log(`Prepared settings for ${BOOTSTRAP_DIR} `);
  createAngularCliSettingsFor(BOOTSTRAP_DIR);
  done();
});

gulp.task('ng.execute.shell', shell.task(EXEC));


gulp.task('ng.execute.log', (done: any) => {
  util.log(`Try to execute "${EXEC}"`);
  done();
});


gulp.task('ng.execute', (done: any) => {
  runSequence('ng.prepare.settings', 'ng.execute.log', 'ng.execute.shell',  done);
});
