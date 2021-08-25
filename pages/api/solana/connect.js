const { Connection } = require("@solana/web3.js");

async function solanaConnect(req, res) {
  const APIKEY = process.env.DATAHUB_SOLANA_API_KEY;
  const url = `https://solana--devnet--rpc.datahub.figment.io/apikey/${APIKEY}`;
  const connection = new Connection(url);
  const version = await connection.getVersion();
  console.log({ version });
  res.status(200).json(version?.["solana-core"]);
}

export default solanaConnect;
