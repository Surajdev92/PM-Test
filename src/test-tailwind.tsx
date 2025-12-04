// Temporary test file to verify Tailwind is working
// This should show a red box with white text if Tailwind is working
export const TestTailwind = () => {
  return (
    <div className="bg-red-500 text-white p-4 m-4 rounded-lg">
      <h1 className="text-2xl font-bold">Tailwind CSS Test</h1>
      <p>If you see this styled (red background, white text), Tailwind is working!</p>
    </div>
  )
}

