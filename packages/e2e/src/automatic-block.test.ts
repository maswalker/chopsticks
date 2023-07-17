import { afterEach, describe, expect, it } from 'vitest'

import { BuildBlockMode } from '@acala-network/chopsticks'
import { delay } from './helper'
import networks from './networks'

describe('automatic block mode', async () => {
  it('automatic block periodically every 12s should work', async () => {
    const acala = await networks.acala({ buildBlockMode: BuildBlockMode.Automatic })
    const { chain } = acala
    const originalBlock = chain.head.number
    await delay(60000)
    const currentBlock = chain.head.number
    expect(currentBlock).gt(originalBlock)
    await acala.teardown()
  })

  // TODO: test cases below should be added later. but I think that it's out of scope.
  it('automatic block could be disabled by set mode', async () => {
    
  })

  it('automatic block could be enabled by set mode', async () => {
    
  })

})
