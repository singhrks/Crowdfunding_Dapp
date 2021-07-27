import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x57E115968Bdd733d42940ABbb8dF31A12e614a34"
);

export default instance;
