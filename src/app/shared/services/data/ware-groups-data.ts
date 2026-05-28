const entities = {
  agricultural: {
    id: 'agricultural',
    name: 'Agricultural Goods(农业产品)',
    factoryName: 'Agricultural Goods Factory',
    icon: 'be_upgrade_agricultural',
    tier: 5,
  },
  energy: {
    id: 'energy',
    name: 'Energy(能量电池)',
    factoryName: 'Energy Complex',
    icon: 'be_upgrade_energy',
    tier: 1,
  },
  food: {
    id: 'food',
    name: 'Food(食物)',
    factoryName: 'Farm',
    icon: 'be_upgrade_food',
    tier: 6,
  },
  gases: {
    id: 'gases',
    name: 'Gases(气体)',
    factoryName: 'Gas Refinery',
    icon: 'be_upgrade_refined',
  },
  hightech: {
    id: 'hightech',
    name: 'High Tech Goods(高科技产品)',
    factoryName: 'High Tech Factory',
    icon: 'be_upgrade_hightech',
    tier: 3,
  },
  ice: {
    id: 'ice',
    name: 'Ice(冰)',
    factoryName: 'Ice Refinery',
    icon: 'be_upgrade_water',
  },
  minerals: {
    id: 'minerals',
    name: 'Minerals(矿物)',
    factoryName: 'Mineral Refinery',
    icon: 'be_upgrade_refined',
  },
  pharmaceutical: {
    id: 'pharmaceutical',
    name: 'Pharmaceutical Goods(医疗用品)',
    factoryName: 'Pharmaceutical Goods Factory',
    icon: 'be_upgrade_pharmaceutical',
    tier: 7,
  },
  refined: {
    id: 'refined',
    name: 'Refined Goods(精炼产品)',
    factoryName: 'Refined Goods Complex',
    icon: 'be_upgrade_refined',
    tier: 2,
  },
  shiptech: {
    id: 'shiptech',
    name: 'Ship Technology(舰船科技)',
    factoryName: 'Ship Technology Factory',
    icon: 'be_upgrade_shiptech',
    tier: 4,
  },
  water: {
    id: 'water',
    name: 'Water(水)',
    factoryName: 'Water Refinery',
    icon: 'be_upgrade_water',
    tier: 2,
  },
};

export const WareGroups = {
  ...entities,
  all: [
    entities.agricultural,
    entities.energy,
    entities.food,
    entities.gases,
    entities.hightech,
    entities.ice,
    entities.minerals,
    entities.pharmaceutical,
    entities.refined,
    entities.shiptech,
    entities.water,
  ]
};
