const items = [
  "연어 900 그램",
  "신선한 로즈마리 5가지",
  "올리브 오일 5 테이블스푼",
  "작은 레몬 2 조각",
  "코셔 소금 1 티스푼",
  "다진 마늘 4 쪽",
];

const list = React.createElement(
  "ul",
  null,
  items.map(ingredient => React.createElement("li", null, ingredient)),
);

ReactDOM.render(list, document.getElementById('root'));

console.log(list);

