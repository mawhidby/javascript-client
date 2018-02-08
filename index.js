require('dotenv').config()

const client = require('./lib/client');

// client.createVertex('person')
//   .then((result) => {
//     console.log(result)
//     client.deleteVertices({
//       "type": "vertices",
//       "ids": [result.id]
//     }).then((res) => {
//       console.log(res)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// client.createEdge('00000000-0000-0000-1511-219e4a043d48', 'likes', '00000000-0000-0000-1511-21a18e644cc8', '1')
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// client.getVertices({
//   "type": "all",
//   "start_id": null,
//   "limit": 1000
// }).then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// client.getEdgeCount({
//   "type": "edges",
//   "keys": [{
//       "outbound_id": "00000000-0000-0000-1511-219e4a043d48",
//       "type": "likes",
//       "inbound_id": "00000000-0000-0000-1511-21a18e644cc8"
//   }]
// }).then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

exports.client = client