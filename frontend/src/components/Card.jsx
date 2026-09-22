const Card = ({children, title, description, status}) => {
  return (
    <div className="card border p-4 rounded shadow-md bg-white min-w-72">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {status}</p>
     {children}
    </div>
  );
};

export default Card;