var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!item) {
    return 'must pass in item';
  }
  this[item] = item;
};

setPrototype.contains = function(item) {
  return !!this[item];
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  add: constant O(1);
  contains: constant O(1);
  remove: constant O(1);
 */
