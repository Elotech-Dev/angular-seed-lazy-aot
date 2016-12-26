import * as util from 'gulp-util';

import Config from '../../config';


export = (done: any) => {

  util.log(`Prepared settings for ${Config.BOOTSTRAP_DIR} `);
  Config.createAngularCliSettings();
  done();
};
