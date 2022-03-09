let varieties = [
    {
        key: "french-breakfast",
        id: "CnUhbW9llo8",
        name: "French Breakfast"
    },
    {
        key: "saxa-2",
        id: "YsReE7VsMIg",
        name: "Saxa 2"
    },
    {
        key: "black-spanish",
        id: "-RtnhL43V6U",
        name: "Black Spanish"
    },
    {
        key: "hailstone",
        id: "Q6db5fcqbgA",
        name: "Hailstone"
    }
  ];

  export function getRadishVarieties() {
      return varieties.map((v) => ({
        key: v.key,
        name: v.name,
        url: `#/radish/${v.key}`
      }));
  }
  
  export function getPlantInfo(key: string){
    return varieties.find((v) => v.key === key);
  }