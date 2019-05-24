import OrmucoCache from "./OrmucoCache";
jest.mock("./OrmucoCache");

beforeEach(() => {
  OrmucoCache.mockClear();
});

it("check if the consumer called the class constructor", () => {
  const ormucoCache = new OrmucoCache(30, 7);
  expect(OrmucoCache).toHaveBeenCalledTimes(1);
});
