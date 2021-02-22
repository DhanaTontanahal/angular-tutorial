var objArr = [
  {
    ID: 100,
    MYNAME: "name1",
    MYPLACE: "place1",
  },

  {
    id: 101,
    name: "name2",
    place: "place2",
  },
  {
    id: 102,
    name: "name3",
    place: "place3",
  },
  {
    id: 103,
    name: "name4",
    place: "place4",
  },
  {
    id: 104,
    name: "name5",
    place: "place5",
  },
];
let newObjArr = objArr.filter((obj)=>{
    return obj.id == 101;
})

console.log(newObjArr)