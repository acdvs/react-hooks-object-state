'use strict'

const objects = {
  depthOne: {
    initObject: {
      bool1: true,
      string1: 'foo',
      number1: 5
    },
    newEntries: {
      bool1: false
    },
    merged: {
      bool1: false,
      string1: 'foo',
      number1: 5
    }
  },
  depthTwo: {
    initObject: {
      bool1: true,
      string1: 'foo',
      obj2: {
        bool2: true,
        string2: 'foo'
      }
    },
    newEntries: {
      bool1: false,
      obj2: {
        string2: 'bar'
      }
    },
    merged: {
      bool1: false,
      string1: 'foo',
      obj2: {
        bool2: true,
        string2: 'bar'
      }
    }
  },
  depthThree: {
    initObject: {
      bool1: true,
      string1: 'foo',
      obj2: {
        bool2: true,
        string2: 'foo',
        obj3: {
          bool3: true
        }
      }
    },
    newEntries: {
      bool1: false,
      string1: 'bar',
      obj2: {
        bool2: false
      }
    },
    merged: {
      bool1: false,
      string1: 'bar',
      obj2: {
        bool2: false,
        string2: 'foo',
        obj3: {
          bool3: true
        }
      }
    }
  },
  array1d: {
    initObject: {
      bool1: true,
      array1: [1, 2, 3]
    },
    newEntries: {
      array1: [1, 3, 4]
    },
    merged: {
      bool1: true,
      array1: [1, 3, 4]
    }
  },
  array2d: {
    initObject: {
      bool1: true,
      array1: [1, [2, 3], 4]
    },
    newEntries: {
      array1: [1, [3, 3], 5]
    },
    merged: {
      bool1: true,
      array1: [1, [3, 3], 5]
    }
  }
}

export default objects