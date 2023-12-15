function ListGroup() {
  const items = ["New York", "Mumbai", "London"];

  return (
    <>
      <h1>Keith List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
