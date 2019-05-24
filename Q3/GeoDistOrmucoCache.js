import OrmucoCache from "./OrmucoCache";
import AppProperties from "./AppProperties";

class GeoDistOrmucoCache {
  constructor(locations = AppProperties.DEFAULT_LOCATION_CACHES) {
    this.locations = locations;
    this.Cache = {};
    locations.forEach(element => {
      this.Cache[element.cacheId] = new OrmucoCache();
    });
  }

  getItemFromCache(item, location) {
    let cacheId = this.getClosestCacheId(location);
    let content = this.Cache.cacheId.getItemFromCache(item);
    if (!content) {
      content = this.Cache.cacheId.getItemFromCache(item);
    }
    this.updateAllOtherCaches(item, location);
    return content;
  }

  getClosestCacheId(location) {
    return this.locations[Math.floor(Math.random() * this.locations.length)]
      .cacheId;
  }

  updateAllCaches(item, location) {
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
