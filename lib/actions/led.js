'use strict';

function led(player, values) {
  const enable = values[0] === 'on';
  return player.setLEDState(enable);
}

module.exports = function (api) {
  api.registerAction('led', led);
}
