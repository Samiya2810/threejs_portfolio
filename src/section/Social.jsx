import React from 'react';

export default function Social() {
    return (
        <div className="flex justify-center space-x-4">
            {/* Download Resume Button */}
            <a href="/assets/Resume_Samiya (4).pdf" download>
                <button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                    Download Resume
                </button>
            </a>

            {/* LinkedIn Button */}
            <a href="https://www.linkedin.com/in/samiya-malhotra-800983249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                    LinkedIn Profile
                </button>
            </a>
        </div>
    );
}
