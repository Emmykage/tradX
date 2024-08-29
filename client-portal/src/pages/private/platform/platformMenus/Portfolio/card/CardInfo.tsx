import React from 'react'

const CardInfo = () => {
  return (
        <div className="grid md:grid-cols-2 gap-4 table-cards">
                        
                        <div className='py-2 px-3 bg-gray-100/20 rounded-lg card'>
                            <p className='my-4 text-2xl'>
                                Total Portfolio Balance Card
                            </p>
                            <p className='my-3 text-4xl'>
                                650 000$
                            </p>
                        </div>
                        <div className='py-2 px-3 bg-gray-100/20 rounded-lg card2'>
                            <p className='my-4 text-2xl'>
                                Total Portfolio Balance Card
                            </p>
                            <p className='my-3 text-4xl'>
                                +5000$
                            </p>
                        </div>

                </div>  )
}

export default CardInfo