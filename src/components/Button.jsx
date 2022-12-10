export function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="p-2 px-4 bg-yellow-500 rounded-md">
      {children}
    </button>
  );
}
