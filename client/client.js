const { Socket } = require('phoenix-channels')

const cluster = require("cluster")
let { channel } = require('diagnostics_channel')

// duplicate multiple connections
// if (cluster.isMaster) {
//     for (let i = 1; i <= 100; i++) {
//         cluster.fork()
//     }
// } else {


    let socket = new Socket("ws://10.2.13.12:4000/socket/v2/websocket?vsn=2.0.0")

    socket.connect()

//所有验证人
channel = socket.channel("platon_appchain_l2_validator:all_validator")
channel.join()
channel.on("all_validator", msg => {
    console.table(msg)
})

//候选验证人
// channel = socket.channel("platon_appchain_l2_validator:candidate_validator")
// channel.join()
// channel.on("candidate_validator", msg => {
//     console.table(msg)
// })


//活越验证人
// channel = socket.channel("platon_appchain_l2_validator:active_validator")
// channel.join()
// channel.on("active_validator", msg => {
//     console.table(msg)
// })
