const Person = ({ name, age, hobbies }) => {
  const isAdult = age >= 18;
  const hobbiesList = hobbies.map((hobby) => <li key={name}>{hobby}</li>);
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>Name: {name.slice(0, 8)}</p>
      <p>Age: {age}</p>
      <h3> {isAdult ? "Please go vote!" : "You must be 18"}</h3>
      <h4> Hobbies: </h4>
      <ul>{hobbiesList}</ul>
    </div>
  );
};
