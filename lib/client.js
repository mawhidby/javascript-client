const axios = require('axios')
const indraDBServer = process.env.INDRADB_SERVER

const createEdge = async function createEdge (outboundID, type, inboundID, weight) {
  try {
    const response = await axios.put(`${indraDBServer}/edge/${outboundID}/${type}/${inboundID}?weight=${weight}`)
    if (response.status === 200) {
      return {
        status: 200
      }
    } else {
      return {
        status: response.status,
        reason: response.data
      }
    }
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        status: err.response.status,
        reason: err.response.data
      }
    } else {
      return {
        status: 500,
        reason: err.request ? err.request : err
      }
    }
  }
}

const createVertex = async function createVertex (type) {
  try {
    const response = await axios.post(`${indraDBServer}/vertex?type=${type}`)
    return {
      status: 200,
      id: response.data
    }
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        status: err.response.status,
        id: null,
        reason: err.response.data
      }
    } else {
      return {
        status: 500,
        reason: err.request ? err.request : err
      }
    }
  }
}

const getVertices = async function getVertices (query) {
  try {
    const q = encodeURIComponent(JSON.stringify(query))
    const response = await axios.get(`${indraDBServer}/vertex?q=${q}`)
    return {
      status: 200,
      vertices: response.data
    }
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        status: err.response.status,
        vertices: null,
        reason: err.response.data
      }
    } else {
      return {
        status: 500,
        vertices: null,
        reason: err.request ? err.request : err
      }
    }
  }
}

const getEdges = async function getEdges (query) {
  try {
    const q = encodeURIComponent(JSON.stringify(query))
    const response = await axios.get(`${indraDBServer}/edge?q=${q}`)
    return {
      status: 200,
      edges: response.data
    }
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        status: err.response.status,
        edges: null,
        reason: err.response.data
      }
    } else {
      return {
        status: 500,
        edges: null,
        reason: err.request ? err.request : err
      }
    }
  }
}

const getEdgeCount = async function getEdgeCount (query) {
  try {
    const q = encodeURIComponent(JSON.stringify(query))
    const response = await axios.get(`${indraDBServer}/edge?action=count&q=${q}`)
    return {
      status: 200,
      count: response.data
    }
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        status: err.response.status,
        count: -1,
        reason: err.response.data
      }
    } else {
      return {
        status: 500,
        count: -1,
        reason: err.request ? err.request : err
      }
    }
  }
}

const deleteEdges = async function deleteEdges (query) {
  try {
    const q = encodeURIComponent(JSON.stringify(query))
    const response = await axios.delete(`${indraDBServer}/edge?q=${q}`)
    return {
      status: response.status
    }
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        status: err.response.status,
        reason: err.response.data
      }
    } else {
      return {
        status: 500,
        reason: err.request ? err.request : err
      }
    }
  }
}

const deleteVertices = async function deleteVertices (query) {
  try {
    const q = encodeURIComponent(JSON.stringify(query))
    const response = await axios.delete(`${indraDBServer}/vertex?q=${q}`)
    return {
      status: response.status
    }
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        status: err.response.status,
        reason: err.response.data
      }
    } else {
      return {
        status: 500,
        reason: err.request ? err.request : err
      }
    }
  }
}

exports.createEdge = createEdge
exports.createVertex = createVertex
exports.getVertices = getVertices
exports.getEdges = getEdges
exports.getEdgeCount = getEdgeCount
exports.deleteEdges = deleteEdges
exports.deleteVertices = deleteVertices

exports.runScript = (name, payload) => {}
exports.transaction = () => {}