#### File Listing

- OrmucoCache.js
  This contains a single cache implementation

- AppProperties.js
  This file contains configurable properties and their default values

- GeoDistOrmucoCache.js
  This contains the library export. This instantiates the caches and manages the core logic.

#### Using the Library

- Create a `GeoDistOrmucoCache` instance by passing an array which represents the no of caches required.

```javascript
const geoDistOrmucoCache = new GeoDistOrmucoCache([
  { cacheId: "US_EAST", locationReference: "Placeholder for future" },
  { cacheId: "ASIA", locationReference: "Placeholder for future" }
]);
```

- To get an item from the cache, use `getItemFromCache(item, location)` method. This method also requires a location parameter which represents the current location. Based on this the item will be fetched from the closest cache. If the item is not present in the cache, the item will be fetched from the network.

  The method to calculate the closest location is currently a fake method. It just returns a random location from available cache locations.

  If the cache at one location is expired, Retry will be performed from a different location.

- `resetAllCaches()` can be used to reset all the caches.

#### Missing Functionalities

- Time expiration is not implemented in this library.
