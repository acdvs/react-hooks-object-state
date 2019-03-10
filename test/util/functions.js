'use strict'

const functions = {
  basic: {
    initObject: {
      bool: true,
      string: 'foo'
    },
    newEntries: () => {
      return {
        bool: false
      }
    },
    merged: {
      bool: false,
      string: 'foo'
    }
  },
  state: {
    initObject: {
      number: 0,
      string: 'foo'
    },
    newEntries: (state) => {
      return {
        number: state.number + 5
      }
    },
    merged: {
      number: 5,
      string: 'foo'
    }
  }
}

export default functions