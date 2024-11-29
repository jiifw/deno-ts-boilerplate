/**
 * @author Junaid Atari <mj.atari@gmail.com>
 * @see https://github.com/jiifw/deno-ts-boilerplate
 * @link https://github.com/blacksmoke26 Author Website
 * @since 2024-11-29
 */

import 'jsr:@std/dotenv/load';

// App
import { fromApp } from '~/app/index.ts';

// Bootstrapper
(async (): Promise<void> => {
  console.log(await fromApp());
})();
