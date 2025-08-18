import CardPopularProducts from "./CardPopularProducts"
import CardPurchaseSummery from "./CardPurchaseSummery"
import CardSalesSummery from "./CardSalesSummery"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-hidden gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts/>
      <CardSalesSummery/>
      <CardPurchaseSummery/>
      <div className="row-span-3 bg-gray-500"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div>
       <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div>
        <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div>

    
    </div>
    
  )
}

export default Dashboard