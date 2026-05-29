import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import BandariGauravDiwasSection from '../home/sections/social/BandariGauravDiwasSection'

const BandariGauravDiwas = () => {
    const { lang } = useOutletContext<{ lang: Lang }>();
  
  return (
    <BandariGauravDiwasSection lang={lang}/>
  )
}

export default BandariGauravDiwas