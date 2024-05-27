import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { LogBookRecord } from "@/types/entities"
import Image from "next/image"

const getLogBookRecord = (): LogBookRecord => ({
    id: 1,
    creationDate: new Date(),
    workAreaName: 'Cопряжение зн-154',
    description: "по бортам размечены недоборы по бортам размечены недоборы по бортам размечены недоборы по бортам размечены недоборы",
    picture: '/images/image.png',
    authorSignature: 'Иванов И.И.',
    managementOrder: "устранить замечания ",
    managmentSignature: "Дмитриев В.В.",
    recipientSignature: "Петров Д.Д.",
    completionMark: "выполнено",
    notation: "",
})

const prepareCreationDate = (creationDate: Date): string => {
    const date = new Date(creationDate)
    return `
    ${date.getDate()}.${date.getMonth() < 10 ? 0 : ""}${date.getMonth() + 1}.${date.getFullYear()}
      ${date.getHours()}:${date.getMinutes()}
      `
}

export default function Item({ params }: { params: { id: string } }) {
    const {
        creationDate,
        workAreaName,
        description,
        authorSignature,
        managementOrder,
        managmentSignature,
        recipientSignature,
        completionMark,
        picture,
        notation
    } = getLogBookRecord()

    return (
        <div
            className="mt-3 mr-6 grid xl:grid-cols-2 gap-3"
        >
            <div className="flex flex-col border p-6 gap-3 rounded-lg">
                <div className="flex justify-between items-center flex-wrap">
                    <p className="font-semibold text-lg">{workAreaName}</p>
                    <p className="text-sm text-muted-foreground">{prepareCreationDate(creationDate)}</p>
                </div>
                <p className="mt-3 text-muted-foreground">Содержание указания: <span className="text-white">{description}</span></p>
                <p className="text-muted-foreground">Внес запись: <span className="text-white">{authorSignature}</span></p>
                <Separator className="my-4" />
                <p className="text-muted-foreground">Распоряжение технического руководителя: <span className="text-white">{managementOrder}</span></p>
                <p className="text-muted-foreground">Технический руководитель: <span className="text-white">{managmentSignature}</span></p>
                <Separator className="my-4" />
                <p className="text-muted-foreground">Отметка в ознакомлении ответственного лица: <span className="text-white">{recipientSignature}</span></p>
                <p className="text-muted-foreground">Отметка о фактическом выполнении работ: <span className="text-white">{completionMark}</span></p>
                <Separator className="my-4" />
                <p className="text-muted-foreground">Примечание: <span className="text-white">{notation}</span></p>
            </div>

            <AspectRatio ratio={1} className="bg-muted rounded-lg border">
                <Image
                    src={picture}
                    quality={100}
                    alt="Photo by Drew Beamer"
                    fill
                    className="rounded-md object-cover"
                />
            </AspectRatio>


        </div>
    )
}