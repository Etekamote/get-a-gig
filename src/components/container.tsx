type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-gradient-to-tr from-indigo-800 to-black absolute w-full">
      {children}
    </div>
  );
}
