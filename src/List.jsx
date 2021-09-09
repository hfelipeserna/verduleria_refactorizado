function List(props) {
  return (
    <div>
      <h1>{props.label}</h1>
      <ul>
        {props.data.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
