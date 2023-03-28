const root = document.querySelector("#root");

function tick() {
  const element = (
    <div>
      <h1> Jam Sekarang </h1>
      {new Date().toLocaleTimeString()}
    </div>
  );

  ReactDOM.render(element, root);
}
tick();

setInterval(function () {
  tick();
}, 1000);
