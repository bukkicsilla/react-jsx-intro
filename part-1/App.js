const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Toni" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
