export default function Container({ className, children }) {
  return (
    <div
      className={`flex flex-col max-w-5xl px-4 mx-auto mt-6 xl:px-0 gap-y-16 ${className}`}
    >
      {children}
    </div>
  );
}
