'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.listenToStores = listenToStores;
exports.stopListeningToStores = stopListeningToStores;
/**

Put this in your class to have it listen to stores.

When you want to start listening, call this.listenToStores(fireOnListen)
If fireOnListen is true will call all change listeners when they start listening.

When you want to stop listening, call stopListeningToStores()

All functions that you define that follow the format:

  function <storeName>StoreChanged(store);

will be automatically fired on a store change.

*/

var STORES = {
  authStoreChanged: require('../stores/auth'),
  componentStoreChanged: require('../stores/component'),
  eventStoreChanged: require('../stores/event'),
  serviceStoreChanged: require('../stores/service'),
  stateStoreChanged: require('../stores/state'),
  stateHistoryStoreChanged: require('../stores/state_history'),
  streamStoreChanged: require('../stores/stream'),
  syncStoreChanged: require('../stores/sync'),
  notificationStoreChanged: require('../stores/notification'),
  voiceStoreChanged: require('../stores/voice'),
  logbookStoreChanged: require('../stores/logbook') };

function listenToStores(fireOnListen) {
  var storeListeners = [];

  STORES.forEach((function (store, listenerName) {
    if (this[listenerName]) {
      var listener = this[listenerName].bind(this, store);

      store.addChangeListener(listener);

      storeListeners.push({ store: store, listener: listener });

      if (fireOnListen) {
        listener();
      }
    }
  }).bind(this));

  this._storeListeners = storeListeners;
}

function stopListeningToStores() {
  this._storeListeners.forEach(function (_ref) {
    var store = _ref.store;
    var listener = _ref.listener;

    store.removeChangeListener(listener);
  });
}