import InfoFood from "./components/InfoFood";
import ListMenu from "./components/ListMenu";
import SearchMenu from "./components/SearchMenu";


export default function page() {
    return (
        <div className='min-h-screen max-w-screen w-full h-full flex '>
            <div className="w-full h-full p-8 space-y-8 border-r-2">
                <SearchMenu />
                <ListMenu />
            </div>
            <div className="w-2/3 h-full">
                <InfoFood />
            </div>
        </div>
    )
}
