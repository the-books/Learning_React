const root = React.createElement(
  "section",
  { id: "baked-salmon" },
  React.createElement(
    "h1",
    null,
    "구운연어"
  ),
  React.createElement(
    "ul",
    { className: "ingredients" },
    React.createElement("li", null, "연어 900 그램"),
    React.createElement("li", null, "신선한 로즈마리 5가지"),
    React.createElement("li", null, "올리브 오일 5 테이블스푼"),
    React.createElement("li", null, "작은 레몬 2 조각"),
    React.createElement("li", null, "코셔 소금 1 티스푼"),
    React.createElement("li", null, "다진 마늘 4 쪽"),
  ),
  React.createElement(
    "section",
    { className: "instructions" },
    React.createElement("h2", null, "요리절차"),
    React.createElement("p", null, "오블을 190도로 예열한다."),
    React.createElement("p", null, "알루미늄 호일에 올리브 오일을 가볍게 두른다."),
    React.createElement("p", null, "로즈마리, 슬라이스한 레몬, 다진 마늘을 연어 위에 얹는다."),
    React.createElement("p", null, "완전히 익을 때가지 15~20분간 굽는다."),
    React.createElement("p", null, "오븐에서 그릇을 꺼낸다."),
  ),
);

ReactDOM.render(root, document.getElementById('root'));

console.log(root);

