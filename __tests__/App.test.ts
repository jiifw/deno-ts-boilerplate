/**
 * @author Junaid Atari <mj.atari@gmail.com>
 * @see https://github.com/jiifw/deno-ts-boilerplate
 * @link https://github.com/blacksmoke26 Author Website
 * @since 2024-11-29
 */

import { describe, it } from 'jsr:@std/testing/bdd';
import { expect } from 'jsr:@std/expect';

import { fromApp } from '~/app/index.ts';

/// READ MORE: https://docs.deno.com/runtime/fundamentals/testing

describe('greeter function', () => {
  it('A valid message should return from promise method', async () => {
    const result = await fromApp();
    expect(typeof result).toBe('string');
    expect(result).toEqual('message from app');
  });
});
