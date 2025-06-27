import { useLocation, useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const data = useLocation();

  const { name, userId, age, isMarried } = data.state != null ? data.state : {};

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-green-100 border border-green-300 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-green-800">
        👤 Viewing User Profile
      </h1>
      <p className="mt-4 text-lg">
        User ID: <span className="font-semibold">{id}</span>
      </p>
      {data.state !== null && (
        <div>
          <p>Name: {name}</p>
          <p>UserId: {userId}</p>
          <p>Age: {age}</p>
          <p>Marital Status: {isMarried ? "Married" : "Not Married"}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
