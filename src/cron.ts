/**
 * @author Junaid Atari <mj.atari@gmail.com>
 * @see https://github.com/jiifw/deno-ts-boilerplate
 * @link https://github.com/blacksmoke26 Author Website
 * @since 2024-11-29
 */

// READ MORE: https://docs.deno.com/deploy/kv/manual/cron/
Deno.cron('Log a message', '* * * * *', async () => {
  console.log('This will print once a minute.');
});
