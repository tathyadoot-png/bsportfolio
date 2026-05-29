import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import BarodiyaGauravDiwasSection from '../home/sections/social/BarodiyaGauravDiwasSection'

const BarodiyaGauravDiwas = () => {
      const { lang } = useOutletContext<{ lang: Lang }>();
  
  return (
   <BarodiyaGauravDiwasSection lang={lang} />
  )
}

export default BarodiyaGauravDiwas