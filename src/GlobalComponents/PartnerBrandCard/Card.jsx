export function Card(props) {
  return (
    <div className=" w-[10rem] h-[7rem] group flex justify-center items-center">
      <div key={props.id} className=" ">
        <img
          src={props.image}
          alt="focus"
          className="w-[7rem] group-hover:scale-110 duration-300 rounded-[10px]"
        />
      </div>
    </div>
  );
}
