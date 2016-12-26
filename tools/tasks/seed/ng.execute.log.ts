import * as util from 'gulp-util';

import Config from '../../config';


export = (done: any) => {

  util.log(`Try to execute "${Config.EXEC}"`);
  done();
};
