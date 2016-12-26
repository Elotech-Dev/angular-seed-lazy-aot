import Config from './tools/config';
import { loadTasks, loadCompositeTasks  } from './tools/utils';


loadTasks(Config.SEED_TASKS_DIR);
loadTasks(Config.PROJECT_TASKS_DIR);

loadCompositeTasks(Config.SEED_COMPOSITE_TASKS, Config.PROJECT_COMPOSITE_TASKS);

