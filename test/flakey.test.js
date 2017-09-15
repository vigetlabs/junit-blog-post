/**
 * This test intentially fails
 */

describe('Flakey tests', () => {
  it("fails periodically but you aren't sure why", () => {
    expect(Math.random()).toBeGreaterThan(0.15)
  })
})
