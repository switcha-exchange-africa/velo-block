import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAppSelector } from "../../../helpers/hooks/reduxHooks"
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout"
import { useGetP2pSingleAdsQuery } from "../../../redux/services/p2p-ads.service"

const EditAds = () => {
  const router = useRouter()
  const { user } = useAppSelector((state) => state.auth)
  const { editAdsId } = router.query
  console.log("this is the edit id", editAdsId)

  const getSingleAds = useGetP2pSingleAdsQuery({adId: editAdsId, userId: user?._id})

  
  console.log(getSingleAds)

  // useEffect(() => {
  //   getSingleAds()
  // }, [])
  

  return (
    <DashboardLayout title='Edit Ads'>
      <p>editAdsId</p>
    </DashboardLayout>
  )
}

export default EditAds