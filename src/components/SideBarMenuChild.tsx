 

const SideBarMenuChild = ({ data }: { data: string[] }) => {
  return (
    <div>
      {data.map((item: string) => (
        <div className="font-semibold text-sm leading-trim-none tracking-normal py-1.5 text-gray-700 dark:text-foreground">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SideBarMenuChild;
