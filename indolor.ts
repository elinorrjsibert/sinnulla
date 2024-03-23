
const { Ethos } = require('@ethos-protocol/sdk');
const ethos = new Ethos();

const address = '0x0000000000000000000000000000000000000000';
const network = 'mainnet';

const response = await ethos.dripSui({ address, network });

