import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#e33d26] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">NYT</span>
            </div>
            <span className="font-medium text-gray-700">
              NYT Article Explorer
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <span>Data provided by</span>
            <a
              href="https://developer.nytimes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e33d26] hover:text-[#c93522] ml-1 font-medium transition-colors"
            >
              The New York Times API
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}