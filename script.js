let selectedItems=[];
const recipe={
  "flower+leaf":"暗夜结晶",
  "flower+mushroom":"暗影精华",
  "leaf+mushroom":"生命之水",
  "leaf+fruit":"隐身灵液",
  "mushroom+fruit":"虚空水晶",
};
const itemNames = {
    flower: "夜光花",
    leaf: "水晶叶",
    mushroom: "虚空菇",
    fruit: "水晶果"
};
function selectItem(item){
  if (selectedItems.length >= 2) {
        alert("只能放两种材料哦");
        return;
    }

    if (selectedItems.includes(item)) {
        alert("啊哦，没有库存了");
        return;
    }
    selectedItems.push(item);
}
  function startMix() {
    if (selectedItems.length !== 2) {
        alert("你还没有往里面放足够的材料哦");
        return;
    }
    const key = [...selectedItems].sort().join("+");
    const potion=recipe[key]||"啊哦，炸锅了";
    document.getElementById("result").textContent = potion;
  }
