'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-md mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="mailto:johnathanhungdoan@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://github.com/johnabot" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/johnathandoan" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Johnathan-hung Doan. All rights reserved.
        </div>
      </div>
    </footer>
  )
}