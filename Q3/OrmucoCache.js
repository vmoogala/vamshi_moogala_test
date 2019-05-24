import AppProperties from "./AppProperties";

class OrmucoCache {
  constructor(
    expiryTimeInMinutes = AppProperties.CACHE_EXPIRY_TIME,
    cacheSize = AppProperties.CACHE_SIZE
  ) {
    this.expiryTime = new Date();
    this.expiryTime.setMinutes(
      this.expiryTime.getMinutes() + expiryTimeInMinutes
    );
    this.cacheSize = cacheSize;
    this.cache = new Map();
    this.cacheItems = [];
  }

  getDataFromCache(item) {
    if (this.cache.has(item)) {
      this.moveItemToFront(item);
      return this.cache.get(item);
    } else {
      let content = this.getDataFromNetwork(item);
      if (this.cache.size == this.cacheSize) {
        this.removeLeastUsedItemFromCache();
      }
      this.cache.set(item, content);
      this.cacheItems.push(item);
      this.moveItemToFront(item);

      return content;
    }
  }

  getDataFromNetwork(item) {
    let content = [
      "abc",
      "def",
      "ghi",
      "jkl",
      "mno",
      "pqr",
      "stu",
      "vwx",
      "yza",
      "bcd"
    ];
    return content[Math.floor(Math.random() * content.length)];
  }

  moveItemToFront(item) {
    this.cacheItems = this.cacheItems.filter(d => d !== item);
    this.cacheItems.unshift(item);
  }

  removeLeastUsedItemFromCache() {
    let removedItem = this.cacheItems.pop();
    this.cache.delete(removedItem);
  }

  expireCache() {
    this.cache.clear();
    this.cacheItems = [];
    this.expiryTime = new Date();
    this.expiryTime.setMinutes(
      this.expiryTime.getMinutes() + this.expiryTimeInMinutes
    );
  }
}

export default OrmucoCache;
