const GlowingCard = () => {
  return (
    <section className="bg-black-800 container">
      <div className="flex justify-center items-center h-screen">
        <div className="glowing-card bg-black-800 p-5 rounded-lg max-w-sm w-full mx-auto text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out ring-2 ring-cyan-400 ring-opacity-50 hover:ring-opacity-75">
          <h2 className="text-xl font-semibold mb-2">Glowing Card</h2>
          <p className="mb-4">This is a glowing floating card component styled with Tailwind CSS. Hover to see it float!</p>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded shadow">Click Me</button>
        </div>
      </div>
    </section>
  );
}

export default GlowingCard;