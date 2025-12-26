// a Link ojbect is an alternative for the <a> tag
// the link element does not cause page refresh
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <div className="flex flex-col items-start gap-3" >
                <p className="text-4xl" >404 Not Found</p>
                <button type="button" className="bg-gray-500 rounded-full p-2.5">
                    {/* usage of Link element */}
                    <Link to="/">Go to Home</Link> 
                </button>
            </div>
        </>
    );
}

export default NotFoundPage;
