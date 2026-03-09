import Text1 from "./components/text";
import TrashIcon from "./assets/icons/trash-regular.svg?react";
import Icon from "./components/icon";
import CheckIcon from "./assets/icons/check-regular.svg?react";
import PencilIcon from "./assets/icons/pencilsimple-regular.svg?react";
import PlusIcon from "./assets/icons/plus-regular.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/X-regular.svg?react";
import Badge from "./components/badge";


export default function App() {
return (
    <div className="grid gap-3">

<div className="flex flex-col gap-2">
    <Text1 variant="body-sm-bold" className="text-pink-base">ola mundo</Text1>
    <Text1 className="text-green-base">ola mundo</Text1>
    <Text1 variant="body-sm-bold" >ola mundo</Text1>
    <Text1 variant="body-sm-bold" >Levar o dog para passear</Text1>
</div>

<div className="flex gap-1">
    <Icon svg={TrashIcon} className="fill-green-base"/>
    <Icon svg={CheckIcon}/>
    <Icon svg={PencilIcon}/>
    <Icon svg={PlusIcon}/>
    <Icon svg={SpinnerIcon} animate className="w-10 h-9"/>
    <Icon svg={XIcon}/>
</div>

<div>
    <Badge variant="secondary">5</Badge>
    <Badge variant="primary">2 de 5</Badge>
</div>
</div>

    )
}
