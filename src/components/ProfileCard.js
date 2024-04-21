// components/ProfileCard.js
const ProfileCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-600 p-4 flex justify-between items-center">
        <button className="text-white">
          <span className="sr-only">Profile</span>
          <svg className="w-6 h-6 fill-current" /* SVG icon path here */ />
        </button>
        <button className="text-white">
          <span className="sr-only">Messages</span>
          <svg className="w-6 h-6 fill-current" /* SVG icon path here */ />
        </button>
        <button className="text-white">
          <span className="sr-only">Settings</span>
          <svg className="w-6 h-6 fill-current" /* SVG icon path here */ />
        </button>
      </div>
      <div className="p-6">
        <p className="text-gray-700">
          "I think that's a responsibility that I have, to push possibilities, to show people, this is the level that things could be at..."
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
