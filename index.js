module.exports = function tsmlj(ts) {
  var out = '';
  var i = 0;

  // Match normal template string behavior to get the full, formatted string.
  for (; i < arguments.length; i++) {
    out += ts[i] + (arguments[i + 1] || '');
  }

  return out.replace(/\s+/g, ' ').trim();
};
