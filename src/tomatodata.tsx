let varieties = [
    {
        key: "ag-red-cherry",
        id: "NF5Oz6HY3OU",
        name: "Aerogarden Red Cherry"
    },
    {
        key: "tiny-tim",
        id: "TDwWC3YqJjM",
        name: "Tiny Tim"
    },
    {
        key: "42-day",
        id: "hCAu6fTtZZc",
        name: "42 Day"
    },
    {
        key: "venus-micro-dwarf",
        id: "100kT9dQ6iE",
        name: "Venus Micro Dwarf"
    },
    {
        key: "yellow-micro-dwarf",
        id: "EeQrLpdM-OE",
        name: "Yellow Micro Dwarf"
    },
    {
        key: "wherokowhai",
        id: "aUUgGMRYfd8",
        name: "Wherokowhai"
    }
  ];
  
  export function getPlantInfo(key: string){
    return varieties.find((v) => v.key === key);
  }