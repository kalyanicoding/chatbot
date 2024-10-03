import { useState } from "react"

export default function InputField({ output, setOutput }) {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState("")

  const getOutput = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://chatbot-rl46.onrender.com/askedQuestion", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message:input
        })
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      setOutput([data.response])
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 ">
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter query..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={getOutput}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300"
      >
        {loading ? 'Loading...' : 'Search'}
      </button>
    </div>
  )
}
