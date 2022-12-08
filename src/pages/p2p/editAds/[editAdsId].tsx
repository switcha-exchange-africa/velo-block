import { useRouter } from "next/router"
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout"

const EditAds = () => {
  const router = useRouter()
  const { editAdsId } = router.query
  console.log("this is the edit id", editAdsId)
  
  return (
    <DashboardLayout title='Edit Ads'>
      <p>editAdsId</p>
    </DashboardLayout>
  )
}

export default EditAds