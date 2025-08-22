import './App.css'

function App() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-400 relative overflow-hidden flex items-center justify-center font-['Outfit']">
      {/* Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="star absolute w-0.5 h-20 bg-gradient-to-r from-white to-transparent opacity-80 rounded-full animate-shooting-star"
            style={{
              left: `${10 + (i * 8.5)}vw`,
              top: `${5 + (i * 8)}vh`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-wider">
          Rohit
        </h1>
        <p className="text-xl md:text-2xl font-normal">
          Welcome to my portfolio!
        </p>
      </div>
    </div>
  )
}

export default App
