const Card = ({ title, description, img }) => {
    return (
        <div className="max-w-sm overflow-hidden shadow-xl">
            
            <img src={img} alt={title} className="w-full h-40 object-cover" />
            <div className="px-6 py-6">
                <div className="text-black flex items-center">
                    <span className="font-bold font-playfair-display">{title}</span>
                    {description && <span className="mx-3 text-gray-500">|</span>}
                    <span className=" text-xs mx-2 text-gray-400">{description || "No description available."}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;