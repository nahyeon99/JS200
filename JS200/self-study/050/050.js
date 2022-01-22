function Storage() {
  this.dataStore = {};
}
Storage.prototype.put = function (key, data) {
  this.dataStore[key] = data;
};
Storage.prototype.getData = function (key) {
  return this.dataStore[key];
};

const productStorage = new Storage();
