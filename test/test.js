const qitmeer = require('../src')

const network = qitmeer.networks.privnet;

// const privte = 'd7e11af4918fbefaa21fdc49d531099c6b30cc30e19560fe8a337a467b00ab93'
(function () {
  // // 公钥 到 hash 160
  // const {publicKey} = qitmeer.ec.fromPrivateKey(Buffer.from(privte,'hex'))
  // console.log ( publicKey.toString('hex') )
  // const publicKeyHash160 = qitmeer.hash.hash160(publicKey)
  // console.log ( publicKeyHash160.toString('hex') )

  // // hash 160  到地址
  // const p2pkhAddress = qitmeer.address.toBase58Check(publicKeyHash160, network.pubKeyHashAddrId)
  // console.log ( p2pkhAddress )

  // // alex's privkey 9af3b7c0b4f19635f90a5fc722defb961ac43508c66ffe5df992e9314f2a2948
  //   const privte = '9af3b7c0b4f19635f90a5fc722defb961ac43508c66ffe5df992e9314f2a2948'
  //   const alex = qitmeer.ec.fromPrivateKey(Buffer.from(privte, 'hex'))
  // // create a new tx-signer
  const txsnr = qitmeer.txsign.newSigner(network)

  // txsnr.setVersion(1)
  // // alex's previous transaction output, has 450 qitmeer
  // txsnr.addInput('5c0dff371fe9c762139570bdfef7d34aca5e84325871e67fd0203f0da8c5e50c', 2)
  // txsnr.addOutput('RmFskNPMcPLn4KpDqYzkgwBoa5soPS2SDDH', 44000000000)
  // txsnr.addOutput('RmQNkCr8ehRUzJhmNmgQVByv7VjakuCjc3d', 990000000)

  // // sign
  // txsnr.sign(0, alex)

  // const alex = qitmeer.ec.fromWIF('L1g6Qv9Q7H6mraoqLQ4r4pH4up2qfVqzx6y48AoUw1zkke9BnR1F')
  // qx tx-encode -i db4d833a87b300f516a3702a3450037dc9fe9febe41a0713d8e626173c8c4c3f:2 -i 46a6d3d9e1ef552dc9b0eba147ea97e481654a2bccf59fd764652971cb4d9fdd:2 -o RmFskNPMcPLn4KpDqYzkgwBoa5soPS2SDDH:440 -o RmQNkCr8ehRUzJhmNmgQVByv7VjakuCjc3d:9.9
  txsnr.setVersion(1)
  txsnr.addInput('d46a58fced5a05b1dc1f4450e1bdf09696291348a7eccec069ed59343ec35b4d', 2)
  //   txsnr.addInput('46a6d3d9e1ef552dc9b0eba147ea97e481654a2bccf59fd764652971cb4d9fdd', 2)
  txsnr.addOutput('RmFskNPMcPLn4KpDqYzkgwBoa5soPS2SDDH', 89000000000)
  txsnr.addOutput('RmQNkCr8ehRUzJhmNmgQVByv7VjakuCjc3d', 990000000)
  //   // (in)90000000000 - (out)89990000000 = (miner fee)10000000
  //   // sign all index
  //   txsnr.sign(0, alex)
  //   txsnr.sign(1, alex)

  //     const alex = qitmeer.ec.fromWIF('L2dkArHkWP3oxrGPNVJc21tWnsPWJdZJVuVTX2AgudoSvJB4EE28')
  //   txsnr.setVersion(1)
  //   txsnr.addInput('54973ad8c0f29f3f9ae8566aaf551fed78b030702594ccebab18a4b0454dc940', 1)
  //   txsnr.addInput('5663cd2866ed02e695b90c90bd1fbb4d8fdb6ca818441067828750ff27d78bc3', 1)
  //   txsnr.addOutput('TmjCzYVyGbMMRarsnrQKThqbNPAKvsEV5Js', 89000000000)
  //   txsnr.addOutput('TmjCzYVyGbMMRarsnrQKThqbNPAKvsEV5Js', 990000000)
  //   // (in)90000000000 - (out)89990000000 = (miner fee)10000000
  //   // sign all index
  //   txsnr.sign(0, alex)
  //   txsnr.sign(1, alex)

  // get raw Tx
  const rawTx = txsnr.build()// .toBuffer()
  console.log(rawTx.getTxHash(), rawTx.getTxId(), rawTx.toBuffer(undefined, undefined, qitmeer.tx.TxSerializeNoWitness).toString('hex'))
  // return
  // const txra = '01000000023f4c8c3c1726e6d813071ae4eb9ffec97d0350342a70a316f500b3873a834ddb02000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000020000'
  const txra = rawTx.toBuffer().toString('hex')
  console.log(txra, 'txratxratxratxra')
  console.log(
    qitmeer.tx.fromBuffer(Buffer.from(txra, 'hex')),
    rawTx.clone()
  )
})()

// qx tx-encode -i 5c0dff371fe9c762139570bdfef7d34aca5e84325871e67fd0203f0da8c5e50c:2 -o RmFskNPMcPLn4KpDqYzkgwBoa5soPS2SDDH:440 -o RmQNkCr8ehRUzJhmNmgQVByv7VjakuCjc3d:9.9
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac00000000000000000100
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac00000000000000000100000000000000000000000000000000020000
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac00000000000000000205

// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000016a473044022061e957624fc53e9be6217845ed9c7251c04de33fd5143dab84e73c27193effe40220231ba5e6365277af20d41e8e08413147247070b7022f0cbbe9cbb35dc16e24d8012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac000000000000000001000000000000000000000000000000006a473044022061e957624fc53e9be6217845ed9c7251c04de33fd5143dab84e73c27193effe40220231ba5e6365277af20d41e8e08413147247070b7022f0cbbe9cbb35dc16e24d8012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000016a473044022061e957624fc53e9be6217845ed9c7251c04de33fd5143dab84e73c27193effe40220231ba5e6365277af20d41e8e08413147247070b7022f0cbbe9cbb35dc16e24d8012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174

// qx tx-encode -i d46a58fced5a05b1dc1f4450e1bdf09696291348a7eccec069ed59343ec35b4d:2 -i 46a6d3d9e1ef552dc9b0eba147ea97e481654a2bccf59fd764652971cb4d9fdd:2 -o RmFskNPMcPLn4KpDqYzkgwBoa5soPS2SDDH:890 -o RmQNkCr8ehRUzJhmNmgQVByv7VjakuCjc3d:9.9
// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000020000
// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000020000000000000000000000000000000002000000000000000000000000000000000000020000
// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000000301

// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000026a473044022005422cf4f7a082fe931509b44aee54c3d3c80b1f0d43ed1483ffeb7248857fe402202b9c050ed0fbb9883c8ff98d8a48c33483b32ad776d6746365f9b8851e6dcda5012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd1746b483045022100be434e16f4c83947b1a19fefbf319b7170b280c9a0d89c0786624a83bda337910220395753153ab55b21d7041705c75f42778d7846a41ca5cbb5b033f875d20a9f15012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174
// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000026a473044022005422cf4f7a082fe931509b44aee54c3d3c80b1f0d43ed1483ffeb7248857fe402202b9c050ed0fbb9883c8ff98d8a48c33483b32ad776d6746365f9b8851e6dcda5012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd1746b483045022100be434e16f4c83947b1a19fefbf319b7170b280c9a0d89c0786624a83bda337910220395753153ab55b21d7041705c75f42778d7846a41ca5cbb5b033f875d20a9f15012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174
// !function() {
//     const res = [
//         {
//             TxId: '54973ad8c0f29f3f9ae8566aaf551fed78b030702594ccebab18a4b0454dc940',
//             OutIndex: 1,
//             Amount: 500000000
//         },
//         {
//             TxId: '5663cd2866ed02e695b90c90bd1fbb4d8fdb6ca818441067828750ff27d78bc3',
//             OutIndex: 1,
//             Amount: 500000000
//         }
//     ]
//     const value = 4
//     const to = 'TmjCzYVyGbMMRarsnrQKThqbNPAKvsEV5Js'
//     const from = to
//     const keyPair = qitmeer.ec.fromWIF('L2dkArHkWP3oxrGPNVJc21tWnsPWJdZJVuVTX2AgudoSvJB4EE28')
//     const txBuilder = new qitmeer.txsign.newSigner(network);
//     const fee = 1000
//     txBuilder.setVersion(1);

//     const fullValue = Math.ceil(parseFloat(value) * 1e8);
//     let total = 0, arr = [];
//     res.map(function (item, key) {
//         if (total < (fee + fullValue)) {
//             total += item.Amount;
//             arr.push(item);
//             txBuilder.addInput(item['TxId'], item['OutIndex'])
//         }
//     });
//     const balance = total - (fullValue + fee);
//     if (balance >= 0) {
//         txBuilder.addOutput(to, fullValue);
//         txBuilder.addOutput(from, balance);
//     } else {
//         console.log({code: -2}, balance )
//         return
//     }

//     arr.map(function (item, key) {
//         txBuilder.sign(key, keyPair);
//     });

//     console.log(11 )
//     console.log (txBuilder.build().toBuffer().toString("hex") )
//     // return {
//     //     code: 0,
//     //     tx:
//     // };
// }()

// !function() {
//     // 公钥 到 hash 160
//     const {publicKey} = qitmeer.ec.fromPrivateKey(Buffer.from(privte,'hex'))
//     console.log ( publicKey.toString('hex') )
//     const publicKeyHash160 = qitmeer.hash.hash160(publicKey)
//     console.log ( publicKeyHash160.toString('hex') )

//     // hash 160  到地址
//     const p2pkhAddress = qitmeer.address.toBase58Check(publicKeyHash160, network.pubKeyHashAddrId)
//     console.log ( p2pkhAddress )
// }()

// 01000000023f4c8c3c1726e6d813071ae4eb9ffec97d0350342a70a316f500b3873a834ddb02000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000020000
// 01000000023f4c8c3c1726e6d813071ae4eb9ffec97d0350342a70a316f500b3873a834ddb02000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000020000
// 01000000023f4c8c3c1726e6d813071ae4eb9ffec97d0350342a70a316f500b3873a834ddb02000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000020401

// block
const data = require('./data/qitmeer.core/core.json')
const BigNmuber = require('bignumber.js');
(function () {
  const blockdata = data.BlockMultipleTx.json
  const Block = new qitmeer.Block()
  // block.version = blockdata.version
  // Object.keys(block).map( k => {
  //     console.log ( k, blockdata[k] )
  //     block[k] = blockdata[k]
  // })
  Block.version = blockdata.version
  Block.parents = blockdata.parents
  Block.parentRoot = Buffer.from(blockdata.parentroot, 'hex').reverse()
  Block.txRoot = Buffer.from(blockdata.txRoot, 'hex').reverse()
  Block.stateRoot = Buffer.from(blockdata.stateRoot, 'hex').reverse()
  Block.difficulty = blockdata.difficulty
  Block.height = blockdata.height
  Block.timestamp = new Date(blockdata.timestamp) / 1000
  Block.nonce = blockdata.nonce // blockdata.nonce //
  //   const transactions = qitmeer.tx.fromBuffer(Buffer.from(blockdata.transactions[0].hex, 'hex'))
  //   const transactions = qitmeer.tx.fromBuffer(Buffer.from(blockdata.transactions[1].hex, 'hex'))
  Block.transactions = blockdata.transactions.map(v => qitmeer.tx.fromBuffer(Buffer.from(v.hex, 'hex')))// [transactions,transactions1]
  console.log(
    Block
  )
  console.log(
    blockdata.nonce,
    BigNmuber((blockdata.nonce)).toString(),
    Block.toBuffer().toString('hex'),
    qitmeer.block.fromBuffer(Buffer.from('08000000780f1b5426ca177cc0d028772e9e1b02e20b2bd10f7d564cb15ab601000000009a9b31f63c232d819a52da7207f557b41bdf17b9c28207491a4f2487360ddd6a000000000000000000000000000000000000000000000000000000000000000037fd061cb4140000000000000c358a5d00000000f9339f9ff209150f01780f1b5426ca177cc0d028772e9e1b02e20b2bd10f7d564cb15ab60100000000020100000001bfbba8bf710023c1f9ced241e47685c5668af7a72c8172210868aa72c2a883caffffffffffffffff0215257883000000001976a914e2901efe76aa8604003489a176581c669d6e88dc88ac5d889b0e000000001976a914868b9b6bc7e4a9c804ad3d3d7a2a6be27476941e88ac0000000000000000014d02b4140870eb59c65c962f6e1b736f6c6f32303139373933393732393939333238363431333136382430303439323464632d323463662d346331372d393935652d3330646638306339316166380100000001494d0b992054db3c7423bdaf8bd3d05ad7da1dc4204a66090a82808e6bdc225d00000000ffffffff0200e1f505000000001976a91472bad14d2a5b01e866231cc3250c285fae51de2d88aca80b2680000000001976a914afda839fa515ffdbcbc8630b60909c64cfd73f7a88ac0000000000000000016a4730440220423a37601d708ad35cc4edd915a0098682631a8c6325668d1e113742ccdd6c30022049e19596d183b2cb6296c455125ef87979ac1b4d4d7baa78762e30cb3cd6517d012103383b0e1f1e92bd9cd26d961169b68944899c1600c8cb23757c25313b0091b593', 'hex')),
    Block.getHash(),
    Buffer.from(BigNmuber((blockdata.nonce)).toString(16), 'hex').toString('hex'),
    BigNmuber('0x' + Buffer.from('0f1509f29f9f33f9', 'hex').toString('hex'))

  )
  // for ( let i in blcok) {
  //     console.log  ( i )
  // }
})()
// 0000004dca67a0fb534c5df1f07bd6b7ccded70ad291e74a38176dca2a49d20a                                                                                                                                                                                                             0000004dca67a0fb534c5df1f07bd6b7ccded70ad291e74a38176dca2a49d20a
// rpc: 08000000 0ad2492aca6d17384ae791d20ad7deccb7d67bf0f15d4c53fba067ca4d000000 be1a38f4e14b7abe77b6cdd5449cd2698ada2108c7e55fc44643bb54ae1b45c6 0000000000000000000000000000000000000000000000000000000000000000 ffff001e 6400000000000000a113825d 00000000 e912f01d02181f57 01 0ad2492aca6d17384ae791d20ad7deccb7d67bf0f15d4c53fba067ca4d000000 01 0100000001d8055fdc29a2eb78e9eed1adb6f3ea208f4ff907a4b64cc037df40d886d69450ffffffffffffffff0280461c86000000001976a914e2901efe76aa8604003489a176581c669d6e88dc88ac80b2e60e000000001976a914868b9b6bc7e4a9c804ad3d3d7a2a6be27476941e88ac000000000000000001510164081ecdcf84765f4e5d2067726467686e766933706f6f6c363732333431363235363334393731393833382463663239326138622d346138392d343736312d616465352d376239656261623738393539
// jsre:08000000 0ad2492aca6d17384ae791d20ad7deccb7d67bf0f15d4c53fba067ca4d000000 be1a38f4e14b7abe77b6cdd5449cd2698ada2108c7e55fc44643bb54ae1b45c6 0000000000000000000000000000000000000000000000000000000000000000 ffff001e 6400000000000000a113825d          0014f01d02181f57                                                                     01 0100000001d8055fdc29a2eb78e9eed1adb6f3ea208f4ff907a4b64cc037df40d886d69450ffffffffffffffff0280461c86000000001976a914e2901efe76aa8604003489a176581c669d6e88dc88ac80b2e60e000000001976a914868b9b6bc7e4a9c804ad3d3d7a2a6be27476941e88ac000000000000000001510164081ecdcf84765f4e5d2067726467686e766933706f6f6c363732333431363235363334393731393833382463663239326138622d346138392d343736312d616465352d376239656261623738393539
// her: 08000000 0ad2492aca6d17384ae791d20ad7deccb7d67bf0f15d4c53fba067ca4d000000 be1a38f4e14b7abe77b6cdd5449cd2698ada2108c7e55fc44643bb54ae1b45c6 0000000000000000000000000000000000000000000000000000000000000000 ffff001e 6400000000000000a113825d          0014f01d02181f57
//      08000000 0ad2492aca6d17384ae791d20ad7deccb7d67bf0f15d4c53fba067ca4d000000 be1a38f4e14b7abe77b6cdd5449cd2698ada2108c7e55fc44643bb54ae1b45c6 0000000000000000000000000000000000000000000000000000000000000000 ffff001e 6400000000000000a113825d 00000000 e912f01d02181f57 01 0ad2492aca6d17384ae791d20ad7deccb7d67bf0f15d4c53fba067ca4d000000 01 0100000001d8055fdc29a2eb78e9eed1adb6f3ea208f4ff907a4b64cc037df40d886d69450ffffffffffffffff0280461c86000000001976a914e2901efe76aa8604003489a176581c669d6e88dc88ac80b2e60e000000001976a914868b9b6bc7e4a9c804ad3d3d7a2a6be27476941e88ac000000000000000001510164081ecdcf84765f4e5d2067726467686e766933706f6f6c363732333431363235363334393731393833382463663239326138622d346138392d343736312d616465352d376239656261623738393539
