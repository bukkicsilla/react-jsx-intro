const App = () => {
  return (
    <div>
      <Person name="Echoechoecho" age={20} hobbies={["singing", "reading"]} />
      <Person
        name="Charlie"
        age={25}
        hobbies={["jogging", "playing the piano"]}
      />
      <Person name="Daisy" age={15} hobbies={["hiking", "coding"]} />
      <Button text="Click me" onClick={() => console.log("Button clicked")} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
