const generateUniqureId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqureId()

    expect(id).toHaveLength(8)
  })
})