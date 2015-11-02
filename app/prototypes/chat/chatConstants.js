/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoConstants
 */

var keyMirror = require('keymirror');

module.exports = keyMirror({
  ITEM_CREATE: null,
  ITEM_COMPLETE: null,
  ITEM_DESTROY: null,
  ITEM_DESTROY_COMPLETED: null,
  ITEM_TOGGLE_COMPLETE_ALL: null,
  ITEM_UNDO_COMPLETE: null,
  ITEM_UPDATE_TEXT: null
});
