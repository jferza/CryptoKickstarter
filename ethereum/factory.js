import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
  '0x77e946672DEb5986ef25f488976B12B981140156'
);

export default instance;
