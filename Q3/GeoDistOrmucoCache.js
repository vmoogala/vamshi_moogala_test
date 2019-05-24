import OrmucoCache from "./OrmucoCache";
import AppProperties from "./AppProperties";

class GeoDistOrmucoCache {
  constructor(locations = AppProperties.DEFAULT_LOCATION_CACHES) {
    this.locations = locations;
    this.Cache = {};
    // creating distributed caches based on the parameter passed
    locations.forEach(element => {
      this.Cache[element.cacheId] = new OrmucoCache();
    });
  }

  // This will return the item from the closest cache.
  // If the item is not present in the cache, the item will be fetched from the network.
  getItemFromCache(item, location) {
    let cacheId = this.getClosestCacheId(location);
    let content = this.Cache[cacheId].getDataFromCache(item);

    // Retry if cache is expired/network failure is occured
    if (!content) {
      content = this.Cache[cacheId].getDataFromCache(item);
    }

    //Update caches in other locations
    this.updateAllOtherCaches(item, location);
    return content;
  }

  // This methid will return the cache whihc is closest to the passed location
  // Currently it is random
  getClosestCacheId(location) {
    let randomLocation = this.locations[
      Math.floor(Math.random() * this.locations.length)
    ].cacheId;

    return randomLocation;
  }

  // Update all the other caches
  updateAllOtherCaches(item, location) {
    for (let key in this.Cache) {
      if (key !== location) {
        this.Cache[key].getDataFromCache(item);
      }
    }
  }

  resetAllCaches() {
    this.Cache = {};
  }
}

export default GeoDistOrmucoCache;
