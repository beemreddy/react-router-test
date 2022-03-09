let varieties = [
    {
        key: "long-standing-spinach",
        id: "3S3jsLzpcuw",
        name: "Bloomsdale Long Standing Spinach"
    },
    {
        key: "malabar-spinach",
        id: "6IwFK2UM72w",
        name: "Malabar Spinach"
    },
    {
        key: "egyptian-spinach",
        id: "xQfHONNGYsw",
        name: "Egyptian Spinach"
    }
  ];

  export function getSpinachVarieties() {
      return varieties.map((v) => ({
        key: v.key,
        name: v.name,
        url: `#/spinach/${v.key}`
      }));
  }
  
  export function getPlantInfo(key: string){
    return varieties.find((v) => v.key === key);
  }