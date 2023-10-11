/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
let {
  V2EthAaveOracleContract,
  V2EthResolverContract,
  V2EthSourcesContract,
  V2EthProviderContract,
  V2EthOracleAnchorContract,
  V2EthSwapContract,
  V2EthUniRepayContract,
  V2PolyAaveOracleContract,
  V2PolySourcesContract,
  V2PolyProviderContract,
  V2AvalAaveOracleContract,
  V2AvalSourcesContract,
  V2AvalProviderContract,
  V3ArbRewardsContract,
  V3ArbAaveOracleContract,
  V3ArbPoolContract,
  V3AvalRewardsContract,
  V3AvalAaveOracleContract,
  V3AvalPoolContract,
  V3BaseRewardsContract,
  V3BaseAaveOracleContract,
  V3BasePoolContract,
  V3FantomRewardsContract,
  V3FantomAaveOracleContract,
  V3FantomPoolContract,
  V3HarmonyRewardsContract,
  V3HarmonyAaveOracleContract,
  V3HarmonyPoolContract,
  V3EthRewardsContract,
  V3EthAaveOracleContract,
  V3EthPoolContract,
  V3MetisRewardsContract,
  V3MetisAaveOracleContract,
  V3MetisPoolContract,
  V3OpRewardsContract,
  V3OpAaveOracleContract,
  V3OpPoolContract,
  V3PolyRewardsContract,
  V3PolyAaveOracleContract,
  V3PolyPoolContract,
  V3GhoMinterContract,
  V3GhoTokenContract,
  V3GhoVarContract,
} = require("../generated/src/Handlers.bs.js");

// AssetSourceUpdated event handler 
V2EthAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V2EthAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});
// FallbackOracleUpdated event handler 
V2EthAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V2EthAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});
// OwnershipTransferred event handler 
V2EthAaveOracleContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V2EthAaveOracleContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});
// WethSet event handler 
V2EthAaveOracleContract.WethSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Wethset.load(uniqueId);
});

V2EthAaveOracleContract.WethSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Wethset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      weth: event.params.weth,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Wethset.set(entity);
  }
});
// ABIChanged event handler 
V2EthResolverContract.ABIChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Abichanged.load(uniqueId);
});

V2EthResolverContract.ABIChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Abichanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      contentType: event.params.contentType,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Abichanged.set(entity);
  }
});
// AddrChanged event handler 
V2EthResolverContract.AddrChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addrchanged.load(uniqueId);
});

V2EthResolverContract.AddrChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addrchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      a: event.params.a,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addrchanged.set(entity);
  }
});
// AddressChanged event handler 
V2EthResolverContract.AddressChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addresschanged.load(uniqueId);
});

V2EthResolverContract.AddressChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addresschanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      coinType: event.params.coinType,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addresschanged.set(entity);
  }
});
// AuthorisationChanged event handler 
V2EthResolverContract.AuthorisationChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Authorisationchanged.load(uniqueId);
});

V2EthResolverContract.AuthorisationChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Authorisationchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      owner: event.params.owner,
      target: event.params.target,
      isAuthorised: event.params.isAuthorised,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Authorisationchanged.set(entity);
  }
});
// ContenthashChanged event handler 
V2EthResolverContract.ContenthashChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Contenthashchanged.load(uniqueId);
});

V2EthResolverContract.ContenthashChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Contenthashchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      hash: event.params.hash,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Contenthashchanged.set(entity);
  }
});
// DNSRecordChanged event handler 
V2EthResolverContract.DNSRecordChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Dnsrecordchanged.load(uniqueId);
});

V2EthResolverContract.DNSRecordChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Dnsrecordchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      name: event.params.name,
      resource: event.params.resource,
      record: event.params.record,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Dnsrecordchanged.set(entity);
  }
});
// DNSRecordDeleted event handler 
V2EthResolverContract.DNSRecordDeleted.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Dnsrecorddeleted.load(uniqueId);
});

V2EthResolverContract.DNSRecordDeleted.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Dnsrecorddeleted.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      name: event.params.name,
      resource: event.params.resource,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Dnsrecorddeleted.set(entity);
  }
});
// DNSZoneCleared event handler 
V2EthResolverContract.DNSZoneCleared.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Dnszonecleared.load(uniqueId);
});

V2EthResolverContract.DNSZoneCleared.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Dnszonecleared.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Dnszonecleared.set(entity);
  }
});
// DNSZonehashChanged event handler 
V2EthResolverContract.DNSZonehashChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Dnszonehashchanged.load(uniqueId);
});

V2EthResolverContract.DNSZonehashChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Dnszonehashchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      lastzonehash: event.params.lastzonehash,
      zonehash: event.params.zonehash,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Dnszonehashchanged.set(entity);
  }
});
// InterfaceChanged event handler 
V2EthResolverContract.InterfaceChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Interfacechanged.load(uniqueId);
});

V2EthResolverContract.InterfaceChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Interfacechanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      interfaceID: event.params.interfaceID,
      implementer: event.params.implementer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Interfacechanged.set(entity);
  }
});
// NameChanged event handler 
V2EthResolverContract.NameChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Namechanged.load(uniqueId);
});

V2EthResolverContract.NameChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Namechanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      name: event.params.name,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Namechanged.set(entity);
  }
});
// PubkeyChanged event handler 
V2EthResolverContract.PubkeyChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Pubkeychanged.load(uniqueId);
});

V2EthResolverContract.PubkeyChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Pubkeychanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      x: event.params.x,
      y: event.params.y,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Pubkeychanged.set(entity);
  }
});
// TextChanged event handler 
V2EthResolverContract.TextChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Textchanged.load(uniqueId);
});

V2EthResolverContract.TextChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Textchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      indexedKey: event.params.indexedKey,
      key: event.params.key,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Textchanged.set(entity);
  }
});
// AggregatorUpdated event handler 
V2EthSourcesContract.AggregatorUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Aggregatorupdated.load(uniqueId);
});

V2EthSourcesContract.AggregatorUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Aggregatorupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      token: event.params.token,
      aggregator: event.params.aggregator,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Aggregatorupdated.set(entity);
  }
});
// AddressesProviderRegistered event handler 
V2EthProviderContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderregistered.load(uniqueId);
});

V2EthProviderContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addressesproviderregistered.set(entity);
  }
});
// AddressesProviderUnregistered event handler 
V2EthProviderContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V2EthProviderContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addressesproviderunregistered.set(entity);
  }
});
// OwnershipTransferred event handler 
V2EthProviderContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V2EthProviderContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetSourceUpdated event handler 
V2EthOracleAnchorContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Oassetsourceupdated.load(uniqueId);
});

V2EthOracleAnchorContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Oassetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      token: event.params.token,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Oassetsourceupdated.set(entity);
  }
});
// OwnershipTransferred event handler 
V2EthSwapContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V2EthSwapContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});

// Swapped event handler 
V2EthSwapContract.Swapped.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Swapped.load(uniqueId);
});

V2EthSwapContract.Swapped.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Swapped.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fromAsset: event.params.fromAsset,
      toAsset: event.params.toAsset,
      fromAmount: event.params.fromAmount,
      receivedAmount: event.params.receivedAmount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Swapped.set(entity);
  }
});

// OwnershipTransferred event handler 
V2EthUniRepayContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V2EthUniRepayContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});

// Swapped event handler 
V2EthUniRepayContract.Swapped.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Swapped.load(uniqueId);
});

V2EthUniRepayContract.Swapped.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Swapped.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fromAsset: event.params.fromAsset,
      toAsset: event.params.toAsset,
      fromAmount: event.params.fromAmount,
      receivedAmount: event.params.receivedAmount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Swapped.set(entity);
  }
});

// AssetSourceUpdated event handler 
V2PolyAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V2PolyAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});
// FallbackOracleUpdated event handler 
V2PolyAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V2PolyAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});
// OwnershipTransferred event handler 
V2PolyAaveOracleContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V2PolyAaveOracleContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});
// WethSet event handler 
V2PolyAaveOracleContract.WethSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Wethset.load(uniqueId);
});

V2PolyAaveOracleContract.WethSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Wethset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      weth: event.params.weth,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Wethset.set(entity);
  }
});

// AggregatorUpdated event handler 
V2PolySourcesContract.AggregatorUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Aggregatorupdated.load(uniqueId);
});

V2PolySourcesContract.AggregatorUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Aggregatorupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      token: event.params.token,
      aggregator: event.params.aggregator,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Aggregatorupdated.set(entity);
  }
});
// AddressesProviderRegistered event handler 
V2PolyProviderContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderregistered.load(uniqueId);
});

V2PolyProviderContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addressesproviderregistered.set(entity);
  }
});
// AddressesProviderUnregistered event handler 
V2PolyProviderContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V2PolyProviderContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addressesproviderunregistered.set(entity);
  }
});
// OwnershipTransferred event handler 
V2PolyProviderContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V2PolyProviderContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});

// AssetSourceUpdated event handler 
V2AvalAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V2AvalAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});
// FallbackOracleUpdated event handler 
V2AvalAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V2AvalAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});
// OwnershipTransferred event handler 
V2AvalAaveOracleContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V2AvalAaveOracleContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});
// WethSet event handler 
V2AvalAaveOracleContract.WethSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Wethset.load(uniqueId);
});

V2AvalAaveOracleContract.WethSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Wethset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      weth: event.params.weth,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Wethset.set(entity);
  }
});

// AggregatorUpdated event handler 
V2AvalSourcesContract.AggregatorUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Aggregatorupdated.load(uniqueId);
});

V2AvalSourcesContract.AggregatorUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Aggregatorupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      token: event.params.token,
      aggregator: event.params.aggregator,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Aggregatorupdated.set(entity);
  }
});
// AddressesProviderRegistered event handler 
V2AvalProviderContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderregistered.load(uniqueId);
});

V2AvalProviderContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addressesproviderregistered.set(entity);
  }
});
// AddressesProviderUnregistered event handler 
V2AvalProviderContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V2AvalProviderContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addressesproviderunregistered.set(entity);
  }
});
// OwnershipTransferred event handler 
V2AvalProviderContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V2AvalProviderContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});

// AssetSourceUpdated event handler 
V3ArbAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V3ArbAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});

// FallbackOracleUpdated Event Handler 
V3ArbAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V3ArbAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});

// BaseCurrencySet Event Handler 
V3ArbAaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

V3ArbAaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
V3ArbPoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.V3addressesproviderregistered.load(uniqueId);
});

V3ArbPoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.V3addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.V3addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
V3ArbPoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V3ArbPoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
V3ArbPoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V3ArbPoolContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
V3ArbRewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

V3ArbRewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
V3ArbRewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

V3ArbRewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
V3ArbRewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

V3ArbRewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
V3ArbRewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

V3ArbRewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
V3ArbRewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

V3ArbRewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
V3ArbRewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

V3ArbRewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
V3ArbRewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

V3ArbRewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});

// AssetSourceUpdated event handler 
V3AvalAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V3AvalAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});

// FallbackOracleUpdated Event Handler 
V3AvalAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V3AvalAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});

// BaseCurrencySet Event Handler 
V3AvalAaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

V3AvalAaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
V3AvalPoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.V3addressesproviderregistered.load(uniqueId);
});

V3AvalPoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.V3addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.V3addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
V3AvalPoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V3AvalPoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
V3AvalPoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V3AvalPoolContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
V3AvalRewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

V3AvalRewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
V3AvalRewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

V3AvalRewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
V3AvalRewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

V3AvalRewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
V3AvalRewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

V3AvalRewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
V3AvalRewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

V3AvalRewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
V3AvalRewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

V3AvalRewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
V3AvalRewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

V3AvalRewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});

// AssetSourceUpdated event handler 
V3BaseAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V3BaseAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});

// FallbackOracleUpdated Event Handler 
V3BaseAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V3BaseAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});

// BaseCurrencySet Event Handler 
V3BaseAaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

V3BaseAaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
V3BasePoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.V3addressesproviderregistered.load(uniqueId);
});

V3BasePoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.V3addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.V3addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
V3BasePoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V3BasePoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
V3BasePoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V3BasePoolContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
V3BaseRewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

V3BaseRewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
V3BaseRewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

V3BaseRewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
V3BaseRewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

V3BaseRewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
V3BaseRewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

V3BaseRewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
V3BaseRewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

V3BaseRewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
V3BaseRewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

V3BaseRewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
V3BaseRewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

V3BaseRewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});

// AssetSourceUpdated event handler 
V3FantomAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V3FantomAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});

// FallbackOracleUpdated Event Handler 
V3FantomAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V3FantomAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});

// BaseCurrencySet Event Handler 
V3FantomAaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

V3FantomAaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
V3FantomPoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.V3addressesproviderregistered.load(uniqueId);
});

V3FantomPoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.V3addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.V3addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
V3FantomPoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V3FantomPoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
V3FantomPoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V3FantomPoolContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
V3FantomRewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

V3FantomRewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
V3FantomRewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

V3FantomRewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
V3FantomRewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

V3FantomRewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
V3FantomRewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

V3FantomRewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
V3FantomRewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

V3FantomRewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
V3FantomRewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

V3FantomRewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
V3FantomRewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

V3FantomRewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});

// AssetSourceUpdated event handler 
V3HarmonyAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V3HarmonyAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});

// FallbackOracleUpdated Event Handler 
V3HarmonyAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V3HarmonyAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});

// BaseCurrencySet Event Handler 
V3HarmonyAaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

V3HarmonyAaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
V3HarmonyPoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.V3addressesproviderregistered.load(uniqueId);
});

V3HarmonyPoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.V3addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.V3addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
V3HarmonyPoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V3HarmonyPoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
V3HarmonyPoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V3HarmonyPoolContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
V3HarmonyRewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

V3HarmonyRewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
V3HarmonyRewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

V3HarmonyRewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
V3HarmonyRewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

V3HarmonyRewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
V3HarmonyRewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

V3HarmonyRewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
V3HarmonyRewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

V3HarmonyRewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
V3HarmonyRewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

V3HarmonyRewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
V3HarmonyRewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

V3HarmonyRewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});

// AssetSourceUpdated event handler 
V3EthAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V3EthAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});

// FallbackOracleUpdated Event Handler 
V3EthAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V3EthAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});

// BaseCurrencySet Event Handler 
V3EthAaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

V3EthAaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
V3EthPoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.V3addressesproviderregistered.load(uniqueId);
});

V3EthPoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.V3addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.V3addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
V3EthPoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V3EthPoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
V3EthPoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V3EthPoolContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
V3EthRewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

V3EthRewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
V3EthRewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

V3EthRewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
V3EthRewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

V3EthRewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
V3EthRewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

V3EthRewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
V3EthRewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

V3EthRewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
V3EthRewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

V3EthRewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
V3EthRewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

V3EthRewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});

// AssetSourceUpdated event handler 
V3MetisAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V3MetisAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});

// FallbackOracleUpdated Event Handler 
V3MetisAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V3MetisAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});

// BaseCurrencySet Event Handler 
V3MetisAaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

V3MetisAaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
V3MetisPoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.V3addressesproviderregistered.load(uniqueId);
});

V3MetisPoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.V3addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.V3addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
V3MetisPoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V3MetisPoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
V3MetisPoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V3MetisPoolContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
V3MetisRewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

V3MetisRewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
V3MetisRewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

V3MetisRewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
V3MetisRewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

V3MetisRewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
V3MetisRewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

V3MetisRewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
V3MetisRewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

V3MetisRewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
V3MetisRewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

V3MetisRewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
V3MetisRewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

V3MetisRewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});

// AssetSourceUpdated event handler 
V3OpAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V3OpAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});

// FallbackOracleUpdated Event Handler 
V3OpAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V3OpAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});

// BaseCurrencySet Event Handler 
V3OpAaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

V3OpAaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
V3OpPoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.V3addressesproviderregistered.load(uniqueId);
});

V3OpPoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.V3addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.V3addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
V3OpPoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V3OpPoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
V3OpPoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V3OpPoolContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
V3OpRewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

V3OpRewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
V3OpRewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

V3OpRewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
V3OpRewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

V3OpRewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
V3OpRewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

V3OpRewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
V3OpRewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

V3OpRewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
V3OpRewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

V3OpRewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
V3OpRewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

V3OpRewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});

// AssetSourceUpdated event handler 
V3PolyAaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

V3PolyAaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});

// FallbackOracleUpdated Event Handler 
V3PolyAaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

V3PolyAaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});

// BaseCurrencySet Event Handler 
V3PolyAaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

V3PolyAaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
V3PolyPoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.V3addressesproviderregistered.load(uniqueId);
});

V3PolyPoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.V3addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.V3addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
V3PolyPoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

V3PolyPoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
V3PolyPoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

V3PolyPoolContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
V3PolyRewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

V3PolyRewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
V3PolyRewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

V3PolyRewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
V3PolyRewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

V3PolyRewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
V3PolyRewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

V3PolyRewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
V3PolyRewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

V3PolyRewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
V3PolyRewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

V3PolyRewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
V3PolyRewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

V3PolyRewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});

// FeeUpdated event handler 
V3GhoMinterContract.FeeUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Feeupdated.load(uniqueId);
});

V3GhoMinterContract.FeeUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Feeupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldFee: event.params.oldFee,
      newFee: event.params.newFee,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Feeupdated.set(entity);
  }
});
// FeesDistributedToTreasury event handler 
V3GhoMinterContract.FeesDistributedToTreasury.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Feesdistributedtotreasury.load(uniqueId);
});

V3GhoMinterContract.FeesDistributedToTreasury.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Feesdistributedtotreasury.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      ghoTreasury: event.params.ghoTreasury,
      asset: event.params.asset,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Feesdistributedtotreasury.set(entity);
  }
});
// FeeUpdated event handler 
V3GhoMinterContract.FlashMint.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Flashmint.load(uniqueId);
});

V3GhoMinterContract.FlashMint.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Flashmint.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      receiver: event.params.receiver,
      initiator: event.params.initiator,
      asset: event.params.asset,
      amount: event.params.amount,
      fee: event.params.fee,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Flashmint.set(entity);
  }
});
// GhoTreasuryUpdated event handler 
V3GhoMinterContract.GhoTreasuryUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ghotreasuryupdated.load(uniqueId);
});

V3GhoMinterContract.GhoTreasuryUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ghotreasuryupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldGhoTreasury: event.params.oldGhoTreasury,
      newGhoTreasury: event.params.newGhoTreasury,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ghotreasuryupdated.set(entity);
  }
});
// Approval event handler 
V3GhoTokenContract.Approval.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Approval.load(uniqueId);
});

V3GhoTokenContract.Approval.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Approval.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Approval.set(entity);
  }
});
// FacilitatorAdded event handler 
V3GhoTokenContract.FacilitatorAdded.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Facilitatoradded.load(uniqueId);
});

V3GhoTokenContract.FacilitatorAdded.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Facilitatoradded.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      facilitatorAddress: event.params.facilitatorAddress,
      label: event.params.label,
      bucketCapacity: event.params.bucketCapacity,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Facilitatoradded.set(entity);
  }
});
// FacilitatorBucketCapacityUpdated event handler 
V3GhoTokenContract.FacilitatorBucketCapacityUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Facilitatorbucketcapacityupdated.load(uniqueId);
});

V3GhoTokenContract.FacilitatorBucketCapacityUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Facilitatorbucketcapacityupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      facilitatorAddress: event.params.facilitatorAddress,
      oldCapacity: event.params.oldCapacity,
      newCapacity: event.params.newCapacity,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Facilitatorbucketcapacityupdated.set(entity);
  }
});
// FacilitatorBucketLevelUpdated event handler 
V3GhoTokenContract.FacilitatorBucketLevelUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Facilitatorbucketlevelupdated.load(uniqueId);
});

V3GhoTokenContract.FacilitatorBucketLevelUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Facilitatorbucketlevelupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      facilitatorAddress: event.params.facilitatorAddress,
      oldLevel: event.params.oldLevel,
      newLevel: event.params.newLevel,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Facilitatorbucketlevelupdated.set(entity);
  }
});
// FacilitatorRemoved event handler 
V3GhoTokenContract.FacilitatorRemoved.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Facilitatorremoved.load(uniqueId);
});

V3GhoTokenContract.FacilitatorRemoved.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Facilitatorremoved.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      facilitatorAddress: event.params.facilitatorAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Facilitatorremoved.set(entity);
  }
});
// RoleAdminChanged event handler 
V3GhoTokenContract.RoleAdminChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Roleadminchanged.load(uniqueId);
});

V3GhoTokenContract.RoleAdminChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Roleadminchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      role: event.params.role,
      previousAdminRole: event.params.previousAdminRole,
      newAdminRole: event.params.newAdminRole,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Roleadminchanged.set(entity);
  }
});
// RoleGranted event handler 
V3GhoTokenContract.RoleGranted.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rolegranted.load(uniqueId);
});

V3GhoTokenContract.RoleGranted.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rolegranted.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      role: event.params.role,
      account: event.params.account,
      sender: event.params.sender,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Rolegranted.set(entity);
  }
});
// RoleRevoked event handler 
V3GhoTokenContract.RoleRevoked.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rolerevoked.load(uniqueId);
});

V3GhoTokenContract.RoleRevoked.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rolerevoked.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      role: event.params.role,
      account: event.params.account,
      sender: event.params.sender,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Rolerevoked.set(entity);
  }
});
// Transfer event handler 
V3GhoTokenContract.Transfer.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transfer.load(uniqueId);
});

V3GhoTokenContract.Transfer.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transfer.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      from: event.params.from,
      to: event.params.to,
      value: event.params.value,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Transfer.set(entity);
  }
});
// Upgraded event handler 
V3GhoVarContract.Upgraded.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Upgraded.load(uniqueId);
});

V3GhoVarContract.Upgraded.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Upgraded.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      role: event.params.role,
      previousAdminRole: event.params.previousAdminRole,
      newAdminRole: event.params.newAdminRole,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Upgraded.set(entity);
  }
});

