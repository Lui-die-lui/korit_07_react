function MyComponent2() {
  const handleClick = () => {
    alert("Button pressed!");
  };

  return (
    <>
      <button onClick={handleClick}>Press me!</button>
    </>
  );
}

export default MyComponent2;
