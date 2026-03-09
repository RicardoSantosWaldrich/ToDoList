import Text1 from "./components/text";

export default function App() {
return (
<div className="flex flex-col gap-2">
    <Text1 variant="body-sm-bold" className="text-pink-base">ola mundo</Text1>
    <Text1 className="text-green-base">ola mundo</Text1>
    <Text1 variant="body-sm-bold" >ola mundo</Text1>
    <Text1 variant="body-sm-bold" >Levar o dog para passear</Text1>
</div>
)
}
