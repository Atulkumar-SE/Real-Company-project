import { Link } from "react-router-dom";


export function Card(props) {
  return (
    <div className="">
      <div key={props.id} className=" relative flex flex-col justify-center items-center group border-2 border-black p-8">
        <div className=" w-[10rem] h-[10rem] flex justify-center items-end bg-[#002c7869] rounded-full overflow-hidden mb-3">
          <img
            src={props.image}
            alt="focus"
            className=" w-[80%] items-center group-hover:scale-110 duration-300 "
          />
        </div>
        <h1 className="text-[1.25rem] font-semibold text-center">{props.name}</h1>
        <p className="text-[.9rem] text-justify">{props.post}</p>
        <div className="flex gap-5  absolute bg-white px-10 py-2 translate-y-[430%]">
          {props.socialmedia.map((media, index) => (
            <li key={index} className="group-hover:text-[#002c78]"><Link to={media.path}>{media.icon}</Link></li>
          ))}
        </div>
      </div>
    </div>
  );
}
