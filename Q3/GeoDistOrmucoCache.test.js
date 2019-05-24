import GeoDistOrmucoCache from "./GeoDistOrmucoCache";
jest.mock("./GeoDistOrmucoCache");

beforeEach(() => {
  GeoDistOrmucoCache.mockClear();
});

it("check if the consumer called the class constructor", () => {
  const geoDistOrmucoCache = new GeoDistOrmucoCache();
  expect(GeoDistOrmucoCache).toHaveBeenCalledTimes(1);
});
