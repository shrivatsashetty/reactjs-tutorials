import { useParams } from "react-router-dom";

function ProfilePage() {
    const params = useParams();
    return (
        <div>
            <h1 className="text-4xl">
                Profile Page {params.profileId}
            </h1>
        </div>
    );
}

export default ProfilePage;
