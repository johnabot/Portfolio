import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-white mb-6">Contact Me</h1>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-gray-400 mr-2" />
              <a href="mailto:johnathanhungdoan@gmail.com" className="text-gray-300 hover:text-white">johnathanhungdoan@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Github className="h-6 w-6 text-gray-400 mr-2" />
              <a href="https://github.com/johnabot" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">github.com/johnabot</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-6 w-6 text-gray-400 mr-2" />
              <a href="https://linkedin.com/in/johnathandoan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">linkedin.com/in/johnathandoan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}