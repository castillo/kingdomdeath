(function(global) {
  'use strict';

  const CONTENT_TYPES = {
    MAIN_COMPONENT: {
      type: 'Main Component',
      new: true
    },
    NEW_CROSSOVER: {
      type: 'Crossover',
      new: true
    },
    NEW_EXPANSION: {
      type: 'Expansion',
      new: true
    },
    NEW_EXTRA: {
      type: 'Extra',
      new: true
    },
    NEW_PINUP: {
      type: 'Pinup',
      new: true
    },
    NEW_PROMO: {
      type: 'Promo',
      new: true
    },
    OLD_EXPANSION: {
      type: 'Expansion',
      new: false
    },
    OLD_EXTRA: {
      type: 'Extra',
      new: false
    },
    OLD_PINUP: {
      type: 'Pinup',
      new: false
    },
    OLD_PROMO: {
      type: 'Promo',
      new: false
    }
  };

  const PLEDGES = [
    {
      title: "Add-On's Only",
      gameType: 'none',
      price: 5,
      getApplicableItems: function(items) {
        return [];
      }
    },
    {
      title: "Lantern Upgrade",
      gameType: 'update_pack',
      price: 60,
      getApplicableItems: function(items) {
        return items.filter(function(item) {
          return item.title === "1.5 Update Pack";
        });
      }
    },
    {
      title: "Silver Lantern",
      gameType: 'update_pack',
      price: 195,
      getApplicableItems: function(items) {
        var titles = ["1.5 Update Pack", "Gambler's Chest", "The First Hero Expansion"]
        return items.filter(function(item) {
          return _.includes(titles, item.title);
        });
      }
    },
    {
      title: "Lantern",
      gameType: 'core_game',
      price: 250,
      getApplicableItems: function(items) {
        return items.filter(function(item) {
          return item.title === "1.5 Core Game";
        });
      }
    },
    {
      title: "Gold Lantern",
      gameType: 'core_game',
      price: 350,
      getApplicableItems: function(items) {
        var titles = ["1.5 Core Game", "Gambler's Chest"]
        return items.filter(function(item) {
          return _.includes(titles, item.title);
        });
      }
    },
    {
      title: "Ancient Gold Lantern",
      gameType: 'core_game',
      price: 750,
      getApplicableItems: function(items) {
        var titles = ["1.5 Core Game", "Gambler's Chest"]
        return items.filter(function(item) {
          return _.includes(titles, item.title) || (item.contentType.type === 'Expansion' && !item.contentType.new);
        });
      }
    },
    {
      title: "Retail Lantern",
      gameType: 'core_game',
      price: 1200,
      getApplicableItems: function(items) {
        var coreGame = _.find(items, function(item) { return item.title === "1.5 Core Game"; });
        var items = [];
        for (var i = 0; i < 6; i++) {
          items.push(coreGame);
        }
        return items;
      }
    },
    {
      title: "Black Friday Lantern Upgrade",
      gameType: 'update_pack',
      price: 50,
      getApplicableItems: function(items) {
        return items.filter(function(item) {
          return item.title === "1.5 Update Pack";
        });
      }
    },
    {
      title: "Black Friday Silver Lantern",
      gameType: 'update_pack',
      price: 185,
      getApplicableItems: function(items) {
        var titles = ["1.5 Update Pack", "Gambler's Chest", "The First Hero Expansion"]
        return items.filter(function(item) {
          return _.includes(titles, item.title);
        });
      }
    },
    {
      title: "Black Friday Lantern",
      gameType: 'core_game',
      price: 200,
      getApplicableItems: function(items) {
        return items.filter(function(item) {
          return item.title === "1.5 Core Game";
        });
      }
    },
    {
      title: "Black Friday Gold Lantern",
      gameType: 'core_game',
      price: 300,
      getApplicableItems: function(items) {
        var titles = ["1.5 Core Game", "Gambler's Chest"]
        return items.filter(function(item) {
          return _.includes(titles, item.title);
        });
      }
    },
    {
      title: "Black Friday Gambler's Lantern",
      gameType: 'update_pack',
      price: 777,
      getApplicableItems: function(items) {
        var titles = ["1.5 Update Pack", "Gambler's Chest"]
        var types = ['Expansion', 'Pinup', 'Promo'];
        return items.filter(function(item) {
          return _.includes(titles, item.title) || (item.contentType.new && _.includes(types, item.contentType.type));
        });
      }
    },
    {
      title: "Black Friday Gambler's Lantern 2nd Face",
      gameType: 'core_game',
      price: 927,
      getApplicableItems: function(items) {
        var titles = ["1.5 Core Game", "Gambler's Chest"]
        var types = ['Expansion', 'Pinup', 'Promo'];
        return items.filter(function(item) {
          return _.includes(titles, item.title) || (item.contentType.new && _.includes(types, item.contentType.type));
        });
      }
    },
    {
      title: "Satan's Lantern",
      gameType: 'core_game',
      price: 1666,
      getApplicableItems: function(items) {
        var titles = ["1.5 Core Game", "Gambler's Chest"]
        var types = ['Expansion', 'Pinup', 'Promo'];
        return items.filter(function(item) {
          return _.includes(titles, item.title) || _.includes(types, item.contentType.type) || (!item.contentType.new && item.contentType.type === 'Extra');
        });
      }
    },
    {
      title: "Twin Satan's Lantern",
      gameType: 'core_game',
      price: 1666,
      getApplicableItems: function(items) {
        var titles = ["1.5 Core Game", "Gambler's Chest"]
        var types = ['Expansion', 'Pinup', 'Promo'];
        return items.filter(function(item) {
          return _.includes(titles, item.title) || _.includes(types, item.contentType.type) || (!item.contentType.new && item.contentType.type === 'Extra');
        });
      }
    },
    {
      title: "True Form Satan's Lantern",
      gameType: 'core_game',
      price: 1666,
      getApplicableItems: function(items) {
        var titles = ["1.5 Core Game", "Gambler's Chest"]
        var types = ['Expansion', 'Pinup', 'Promo'];
        return items.filter(function(item) {
          return _.includes(titles, item.title) || _.includes(types, item.contentType.type) || (!item.contentType.new && item.contentType.type === 'Extra');
        });
      }
    },
    {
      title: "Final Form Satan's Lantern",
      gameType: 'core_game',
      price: 1666,
      getApplicableItems: function(items) {
        var titles = ["1.5 Core Game", "Gambler's Chest"]
        var types = ['Expansion', 'Pinup', 'Promo'];
        return items.filter(function(item) {
          return _.includes(titles, item.title) || _.includes(types, item.contentType.type) || (!item.contentType.new && item.contentType.type === 'Extra');
        });
      }
    }
  ];

  const ITEMS = [
    // Main Component
    { title: "1.5 Core Game", price: undefined, contentType: CONTENT_TYPES.MAIN_COMPONENT, addon: false, wave: 1 },
    { title: "1.5 Update Pack", price: undefined, contentType: CONTENT_TYPES.MAIN_COMPONENT, addon: false, wave: 1 },

    // New Expansions
    { title: "Frogdog Expansion", price: 50, contentType: CONTENT_TYPES.NEW_EXPANSION, addon: true, wave: 4, expansionNode: 1 },
    { title: "Nightmare Ram Expansion", price: 40, contentType: CONTENT_TYPES.NEW_EXPANSION, addon: true, wave: 4, expansionNode: 3, speculated: true },
    { title: "Oblivion Mosquito Expansion", price: 50, contentType: CONTENT_TYPES.NEW_EXPANSION, addon: true, wave: 4, expansionNode: 2 },
    { title: "Screaming God Expansion", price: 50, contentType: CONTENT_TYPES.NEW_EXPANSION, addon: true, wave: 4, expansionNode: 5 },
    { title: "The First Hero Expansion", price: 35, contentType: CONTENT_TYPES.NEW_EXPANSION, addon: true, wave: 4 },

    // Old Expansions
    { title: "Dragon King Expansion", price: 75, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: true, wave: 2 },
    { title: "Dung Beetle Knight Expansion", price: 30, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: true, wave: 2 },
    { title: "Flower Knight Expansion", price: 40, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: true, wave: 2 },
    { title: "Gorm Expansion", price: 50, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: true, wave: 2, expansionNode: 1 },
    { title: "Green Knight Armor Expansion", price: undefined, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: false, wave: 2 },
    { title: "Lion God Expansion", price: undefined, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: false, wave: 2 },
    { title: "Lion Knight Expansion", price: 35, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: true, wave: 2 },
    { title: "Lonely Tree Expansion", price: undefined, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: false, wave: 2 },
    { title: "Manhunter Expansion", price: 35, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: true, wave: 2 },
    { title: "Slenderman Expansion", price: undefined, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: false, wave: 2 },
    { title: "Spidicules Expansion", price: undefined, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: false, wave: 2, expansionNode: 2, speculated: true },
    { title: "Sunstalker Expansion", price: undefined, contentType: CONTENT_TYPES.OLD_EXPANSION, addon: false, wave: 2 },

    // New Extras
    { title: "Extra Hardcover 1.5 Core Game Rulebook", price: 40, contentType: CONTENT_TYPES.NEW_EXTRA, addon: true, wave: 3 },
    { title: "Frogdog T-Shirt", price: 25, contentType: CONTENT_TYPES.NEW_EXTRA, addon: true, wave: 3 },
    { title: "Gambler's Chest", price: 100, contentType: CONTENT_TYPES.NEW_EXTRA, addon: true, wave: 3 },

    // Old Extras
    { title: 'Anna & Adam Explorers', price: undefined, contentType: CONTENT_TYPES.OLD_EXTRA, addon: false, wave: 3 },
    { title: 'Aya the Survivor', price: undefined, contentType: CONTENT_TYPES.OLD_EXTRA, addon: false, wave: 3 },
    { title: 'Paul the Survivor', price: undefined, contentType: CONTENT_TYPES.OLD_EXTRA, addon: false, wave: 3 },
    { title: "Satan", price: 25, contentType: CONTENT_TYPES.OLD_EXTRA, addon: true, wave: 3 },
    { title: 'Snow the Savior', price: undefined, contentType: CONTENT_TYPES.OLD_EXTRA, addon: false, wave: 3 },
    { title: 'Twilight Knight', price: undefined, contentType: CONTENT_TYPES.OLD_EXTRA, addon: false, wave: 3 },

    // New Pinups
    { title: "Dung Ball", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },
    { title: "Dung Beetle Dancer", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },
    { title: "Dung Beetle Knight", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },
    { title: "Frogdog Armor", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },
    { title: "Gold Smoke Knight Armor", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },
    { title: "Male Dung Beetle Dancer", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },
    { title: "Male Twilight Knight", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },
    { title: "Screaming God Armor", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },
    { title: "Male Screaming God Armor", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },
    { title: "Nightmare Ram Armor & Ramette", price: 15, contentType: CONTENT_TYPES.NEW_PINUP, addon: true, wave: 3 },

    // Old Pinups
    { title: 'Dragon Sacrifice', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Lantern Festival', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Leather Queen', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Lioness', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Phoenix Dancer', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Pinups of Death', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Primal Huntress', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Rawhide Dame', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Regeneration Suit', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Silk Assassin', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Sunstalker Dancer', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Twilight Witch', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },
    { title: 'Allison the Twilight Knight', price: undefined, contentType: CONTENT_TYPES.OLD_PINUP, addon: false, wave: 3 },

    // New Promos
    { title: "Role Survivors", price: 25, contentType: CONTENT_TYPES.NEW_PROMO, addon: true, wave: 3 },

    // Old Promos
    { title: 'Beyond the Wall', price: undefined, contentType: CONTENT_TYPES.OLD_PROMO, addon: false, wave: 3 },
    { title: 'Holiday Nico Speaker', price: undefined, contentType: CONTENT_TYPES.OLD_PROMO, addon: false, wave: 3 },
    { title: 'Messenger of Courage', price: undefined, contentType: CONTENT_TYPES.OLD_PROMO, addon: false, wave: 3 },
    { title: 'Messenger of First Story', price: undefined, contentType: CONTENT_TYPES.OLD_PROMO, addon: false, wave: 3 },
    { title: 'Messenger of Humanity', price: undefined, contentType: CONTENT_TYPES.OLD_PROMO, addon: false, wave: 3 },
    { title: 'Messenger of Spiral Path', price: undefined, contentType: CONTENT_TYPES.OLD_PROMO, addon: false, wave: 3 },

    // New Crossovers
    { title: "LY3 Candy & Cola", price: 20, contentType: CONTENT_TYPES.NEW_CROSSOVER, addon: true, wave: 3 }
  ];

  const CAMPAIGN_NODES = {
    1: {
      description: "Expansions in this node represent a monster that can be hunted at the very start of the campaign.",
      core_game_monsters: ["White Lion"]
    },
    2: {
      description: "Expansions in this node contain content that can be utilized from as early as Lantern Year 2, and provides a good ramp to mid campaign content.",
      core_game_monsters: ["Screaming Antelope"]
    },
    3: {
      description: "Unknown at the moment.",
      core_game_monsters: []
    },
    4: {
      description: "",
      core_game_monsters: []
    },
    5: {
      description: "Expansions in this node are limited to ONE per campaign.",
      core_game_monsters: []
    }
  };

  function KdmContentManager() {

  }

  KdmContentManager.prototype.getPledges = function() {
    var pledges = _.cloneDeep(PLEDGES);
    return _.sortBy(pledges, 'price');
  };

  KdmContentManager.prototype.getPledgesForGameType = function(gameType) {
    return this.getPledges().filter(function(pledge) { return pledge.gameType === gameType; });
  };

  KdmContentManager.prototype.getAllItems = function() {
    return _.cloneDeep(ITEMS);
  };

  KdmContentManager.prototype.getAddOns = function() {
    return this.getAllItems().filter(function(item) { return item.addon; });
  };

  KdmContentManager.prototype.getAllNewExpansions = function() {
    return this.getAllItems().filter(function(item) { return _.isEqual(item.contentType, CONTENT_TYPES.NEW_EXPANSION); }).sort(itemSort);
  };

  KdmContentManager.prototype.getAllOldExpansions = function() {
    return this.getAllItems().filter(function(item) { return _.isEqual(item.contentType, CONTENT_TYPES.OLD_EXPANSION); }).sort(itemSort);
  };

  KdmContentManager.prototype.getAllNewPinups = function() {
    return this.getAllItems().filter(function(item) { return _.isEqual(item.contentType, CONTENT_TYPES.NEW_PINUP); }).sort(itemSort);
  };

  KdmContentManager.prototype.getAllNewPromos = function() {
    return this.getAllItems().filter(function(item) { return _.isEqual(item.contentType, CONTENT_TYPES.NEW_PROMO); }).sort(itemSort);
  };

  KdmContentManager.prototype.getAllNewCrossovers = function() {
    return this.getAllItems().filter(function(item) { return _.isEqual(item.contentType, CONTENT_TYPES.NEW_CROSSOVER); }).sort(itemSort);
  };

  KdmContentManager.prototype.getCampaignNodes = function() {
    const expansionsWithNodes = this.getAllItems().filter(function(item) { return item.expansionNode; });
    const expansionsByCampaignNode = _.groupBy(expansionsWithNodes, 'expansionNode');
    return _.map(expansionsByCampaignNode, function(expansions, nodeNumber) {
      const expansionsByNewness = _.groupBy(expansions, 'contentType.new');
      const newExpansions = (expansionsByNewness['true'] || []).sort(itemSort);
      const oldExpansions = (expansionsByNewness['false'] || []).sort(itemSort);
      const campaignNode = CAMPAIGN_NODES[nodeNumber];
      return {
        nodeNumber: nodeNumber,
        description: campaignNode.description,
        newExpansions: newExpansions,
        oldExpansions: oldExpansions,
        coreMonsters: campaignNode.core_game_monsters
      };
    }).sort(sortCampaignNodesByNodeNumber);
  };

  function sortCampaignNodesByNodeNumber(a, b) {
    return a.nodeNumber - b.nodeNumber;
  }

  function itemSort(a, b) {
    return a.title.localeCompare(b.title);
  }

  global.KdmContentManager = KdmContentManager;
})(window);
