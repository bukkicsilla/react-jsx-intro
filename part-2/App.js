const App = () => {
  return (
    <div className="app">
      <Tweet
        username="catlover"
        name="Cat Lover"
        date={new Date().toDateString()}
        message="Cats are the best!"
      />
      <Tweet
        username="luamontana"
        name="Lua Montana"
        date={new Date().toDateString()}
        message="Hiking is awesome!"
      />
      <Tweet
        username="hashmap"
        name="Hash Map"
        date={new Date().toDateString()}
        message="HashMaps are the cool!"
      />
      <Tweet
        username="react_vs_vue"
        name="Joe M."
        date={new Date().toDateString()}
        message="I am a full stack developer!"
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
