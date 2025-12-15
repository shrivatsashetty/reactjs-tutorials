import "./index.css"


function Card({title, content}) {
    return (
        <div className="bg-gray-400 flex flex-col gap-y-1.25 w-[300px] p-4 rounded-lg">
            <h1 className="text-2xl">{title}</h1>

            <p>
                {content}
            </p>
        </div>
    );
}

export default Card;
