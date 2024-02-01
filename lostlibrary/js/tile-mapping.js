// Our custom tile mapping with:
// - Single index for putTileAt
// - Array of weights for weightedRandomize
// - Array or 2D array for putTilesAt
const TILE_MAPPING = {
  BLANK: 9,
  WALL: {
    TOP_LEFT: 0,
    TOP_RIGHT: 2,
    BOTTOM_RIGHT: 22,
    BOTTOM_LEFT: 20,
    TOP: 1,
    LEFT: 10,
    RIGHT: 12,
    BOTTOM: 21,
  },
  BOOK: {
    TOP: [
      { index: 3, weight: 4 },
      { index: 4, weight: 1 },
      { index: 5, weight: 1 },
      { index: 6, weight: 1 }
    ],
    LEFT: 8,
    RIGHT: 18,
    BOTTOM: 7,
  },
  FLOOR: 11,
  DOOR: {
    TOP: [22, 11, 20],
    // prettier-ignore
    LEFT: [
      [22], 
      [11], 
      [2]
    ],
    BOTTOM: [2, 11, 0],
    // prettier-ignore
    RIGHT: [
      [20], 
      [11], 
      [0]
    ],
  },
  CHEST: 13,
  STAIRS: 19,
  DECORATION: {
    CORNERS: [
      { index: 17, weight: 1 },
      { index: 23, weight: 1 },
      { index: 24, weight: 1 },
      { index: 25, weight: 1 },
      { index: 26, weight: 1 }
    ],
    CENTER: [
      { index: 15, weight: 1 },
      { index: 16, weight: 1 },
      { index: 27, weight: 3 },
      { index: 28, weight: 3 },
    ]
  },
};

export default TILE_MAPPING;
