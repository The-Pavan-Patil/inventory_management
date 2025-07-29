import React from 'react'
import Navbar from './(components)/Navbar'

type Props = {}

const DashboardWrapper = ({children} : {children : React.ReactNode }) => {
  return (
    <div className={' flex w-full min-h-screen bg-gray-50 text-gray-900 '}>
        sidebar
    <main className={'flex flex-col bg-gray-50 w-full h-full py-7 px-10'}>
      <Navbar></Navbar>
      {children}</main>
    </div>
  )
}

export default DashboardWrapper