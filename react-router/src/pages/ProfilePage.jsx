// use useParams Hook to get query parameters from the route URL
import { useParams } from "react-router-dom";

function ProfilePage() {
    const params = useParams();
    return (
        <div>
            <h1 className="text-4xl">
                {/* accessiing the query params */}
                Profile Page {params.profileId}
            </h1>
        </div>
    );
}

export default ProfilePage;
