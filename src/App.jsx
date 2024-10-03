import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import OutputField from './components/OutputField'
import { Bot } from 'lucide-react'

function App() {
  const [output, setOutput] = useState([])

  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url('https://skil.ai/wp-content/uploads/2021/07/AI-Chatbots-For-Banking-scaled.jpg')` }}
    >
      <div className="bg-white shadow-2xl p-8 rounded-xl w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        <Bot className='inline' size={30} /> AI Finance Bot 
        </h1>
        <InputField output={output} setOutput={setOutput} />
        <OutputField output={output} />
      </div>
    </div>
  )
}

export default App
