/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
export type PathNode = {
  node: number[] /* size: 32 */;
  index: number;
};

/**
 * @category userTypes
 * @category generated
 */
export const pathNodeBeet = new beet.BeetArgsStruct<PathNode>(
  [
    ['node', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['index', beet.u32],
  ],
  'PathNode'
);
