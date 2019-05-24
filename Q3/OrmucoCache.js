import AppProperties from "./AppProperties";

class OrmucoCache {
  constructor(
    expiryTimeInMinutes = AppProperties.CACHE_EXPIRY_TIME,
    cacheSize = AppProperties.CACHE_SIZE
  ) {
    this.expiryTime = new Date(); // Calcuting the expiry time based on the current time
    this.expiryTime.setMinutes(
      this.expiryTime.getMinutes() + expiryTimeInMinutes
    );
    this.cacheSize = cacheSize; // No of items to be stored in the cache
    this.cache = new Map();
    this.cacheItems = [];
  }

  getDataFromCache(item) {
    //If item is present return the item
    if (this.cache.has(item)) {
      this.moveItemToFront(item);
      return this.cache.get(item);
    } else {
      // Performing network request
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

  // When an item is not present in the cache,
  // This method is invoked to fetch it from the network
  // Currently it returns a random text
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

  // This method will move the recently accessed item to the front of the items array.
  // This willl be helpful to remove the least recently accessed item
  // from cache when maximum size is reached
  moveItemToFront(item) {
    this.cacheItems = this.cacheItems.filter(d => d !== item);
    this.cacheItems.unshift(item);
  }

  removeLeastUsedItemFromCache() {
    let removedItem = this.cacheItems.pop();
    this.cache.delete(removedItem);
  }

  //Clearing all the caches
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
