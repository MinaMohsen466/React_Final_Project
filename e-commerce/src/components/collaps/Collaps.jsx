const Collaps = (prop) => {
  const { text, id, setComponentId, componentId } = prop;
  return (
    <button
      className={`${componentId == id ? "active" : ""}`}
      onClick={() => setComponentId(id)}
    >
      {text}
    </button>
  );
};

export default Collaps;
