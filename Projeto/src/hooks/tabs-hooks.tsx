import {useState} from 'react'
import {Tab_view} from '../components/Tabs'

export default function useTabs(){
    const [tabs,setTabs] = useState<Tab_view[]>([])

    const createTabs = (qst: Tab_view) => {
        console.log(qst)
        setTabs([...tabs, qst])
      }
      return {tabs,createTabs}
}
