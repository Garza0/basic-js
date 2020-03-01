const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = '()') {
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {

    if (position <= 0 || position % 1 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = []
      throw new Error()
    }

    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let finish = `( ${this.chain.join(' )~~( ')} )`
    this.chain = []
    return finish
  }
};

module.exports = chainMaker;
