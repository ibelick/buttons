const Button6 = () => {
  return (
    <button
      className="flex h-12 items-center rounded-lg bg-blue-500 p-4 text-white disabled:pointer-events-none disabled:opacity-50 "
      disabled
    >
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent" />
      <div className="ml-2">Loading... </div>
    </button>
  );
};

export default Button6;
