function Nav(props) {
  return (
    <nav>
      <ul>
        {props.data.map((elemento) => (
          <li>{elemento}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
