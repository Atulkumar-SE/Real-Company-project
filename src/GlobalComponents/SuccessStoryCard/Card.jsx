export function Card(props) {
  return (
    <div className="">
      <div key={props.id} className=" group ">
        <div className="overflow-hidden mb-2 ">
          <img
            src={props.image}
            alt="focus"
            className=" group-hover:scale-110 duration-300 "
          />
        </div>
        <h1 className="text-[1.25rem] font-semibold ">{props.title}</h1>
        <p className="text-[.9rem] text-justify">{props.text}</p>
      </div>
    </div>
  );
}
