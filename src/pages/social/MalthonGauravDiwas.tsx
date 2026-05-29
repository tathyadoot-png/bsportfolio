import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import MalthonGauravDiwasSection from '../home/sections/social/MalthonGauravDiwasSection'

const MalthonGauravDiwas = () => {
    const { lang } = useOutletContext<{ lang: Lang }>();
  return (
 <MalthonGauravDiwasSection lang={lang} />
  )
}

export default MalthonGauravDiwas