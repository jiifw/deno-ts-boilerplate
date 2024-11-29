/**
 * @author Junaid Atari <mj.atari@gmail.com>
 * @see https://github.com/jiifw/deno-ts-boilerplate
 * @link https://github.com/blacksmoke26 Author Website
 * @since 2024-11-29
 */

/**
 * @see https://pm2.keymetrics.io/docs/usage/application-declaration/
 */
module.exports = {
  apps: [
    {
      name: 'deno-ts-boilerplate',
      script: 'src/index.js',
      //watch: true,
      //instances: 4,
      //exec_mode: 'cluster',
    },
  ],
};
