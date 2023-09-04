export function Card(props){
return(
    <div className=" ">
        <div key={props.id} className=" ">
            <div className="w-[8.5rem] sm:w-[10.5rem] h-[3.25rem] sm:h-[4.25rem] overflow-hidden group rounded-lg bg-white flex justify-center"><img src={props.image} alt="focus" className="w-[8.5rem] group-hover:scale-110 duration-300 rounded-[10px]"/></div>
        </div>
    </div>
)
}