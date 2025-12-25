import { NavLink, Outlet } from "react-router-dom";

function ProfilesPage() {
    const profiles = [1, 2, 3, 4, 5];
    return (
        <div className="flex gap-6">
            <div className="text-4xl flex flex-col gap-3">
                {profiles.map((profile) => (
                    <NavLink
                        key={profile}
                        to={`/profiles/${profile}`}
                        className={(element) => {
                            return element.isActive ? "bg-amber-700" : "";
                        }}
                    >
                        Profile {profile}
                    </NavLink>
                ))}
            </div>

            <Outlet />
        </div>
    );
}

export default ProfilesPage;
