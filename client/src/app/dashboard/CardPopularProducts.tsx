'use client'
import { useGetDashboardMetricsQuery } from '@/State/api'
import React from 'react'
import { DashboardMetrics } from '@/State/api'

const CardPopularProducts = () => {

    const { data : DashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className='row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16'>
        {isLoading ? <h1>Loading...</h1> : <> 
                <h3 className='text-lg font-semibold px-7 pt-5 pb-2'>Popular Products</h3>
                <div className='overflow-auto h-full'>
                  {DashboardMetrics?.popularProducts.map((product) => (
                    <div key={product.productId} className='flex items-center justify-between gap-3 px-5 py-7 border-b'>
                      <div className='flex items-center gap-3 '>
                        <div>img</div>
                        <div className='flex flex-col justify-between gap-1'>
                          <div className='text-gray-700 font-bold'>
                            {product.name}
                          </div>
                          <div className='flex text-sm items-center'>
                            <span className='font-bold text-blue-500 text-xs'>
                              ${product.price}
                            </span>
                            <span className='mx-2'> | </span>
                            <div>rating</div>
                          </div>
                        </div>
                      </div>
                      </div>
                  ))}
                </div>
        </>}
    </div>
  )
}
export default CardPopularProducts;