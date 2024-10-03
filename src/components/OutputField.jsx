import React from 'react'
import Highlight from 'react-highlight'

const OutputField = ({ output }) => {
  return (
    <div className="mt-6">
      {output.length > 0 ? (
        output.map((item, index) => (
          <div key={index} className="overflow-x-auto bg-gray-50 p-4 rounded-lg shadow-md mb-4">
            <Highlight className="text-lg text-gray-700 font-semibold">
              {item}
            </Highlight>
          </div>
        ))
      ) : (
        <h2 className="text-center text-gray-500">No Output Yet</h2>
      )}
    </div>
  )
}

export default OutputField
