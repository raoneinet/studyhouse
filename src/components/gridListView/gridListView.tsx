// import { Grid, List } from "lucide-react"
// import { Button } from "../ui/button"

// export const GridListView = ({handleView, viewList}: {handleView: (arg: boolean)=>void, viewList?: boolean}) => {
//     return (
//         <div className="hidden lg:flex border border-slate-200 rounded-lg overflow-hidden w-fit">
//             <Button
//                 variant={`${viewList === false ? "default" : "ghost"}`}
//                 className={`p-2`}
//                 onClick={()=>handleView(false)}
//             >
//                 <Grid className="w-5 h-5" />
//             </Button>
//             <Button
//                 variant={`${viewList === true ? "default" : "ghost"}`}
//                 className={`p-2 border-l border-slate-200 `}
//                 onClick={()=>handleView(true)}
//             >
//                 <List className="w-5 h-5" />
//             </Button>
//         </div>
//     )
// }