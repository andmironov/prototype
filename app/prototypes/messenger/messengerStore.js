let Dispatcher = require(".../Dispatcher.js");
let ItemConstants = require("../constants/ItemConstants.js");
let EventEmitter = require('events').EventEmitter;
let AppDispatcher = new Dispatcher();
let assign = require('object-assign');

var CHANGE_EVENT = 'change';

//private items object
var _items = {};

function createItem(text) {
  var id = Date.now();
  _items[id] = {
    id: id,
    complete: false,
    text: text
  }
}

function deleteItem(id) {
  delete _items[id];
}

var ItemsStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _items;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {

      case ItemConstants.ITEM_CREATE:
        text = action.text.trim();

        if (text !== '') {
          createItem(text);
          ItemsStore.emitChange();
        }
        break;

      case ItemConstants.ITEM_DESTROY:
        deleteItem(action.id);
        ItemsStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

})
//console.log(ItemsStore.dispatcherIndex)
module.exports = ItemsStore;
