'use client'
import { Payment, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { useRouter } from "next/navigation";

function getData(): Payment[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "728edssd52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "728eklkld52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "72asdasd8ed52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "728edasdasdasd52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "728edhjkghjssd52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "728eklkl5464645d52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "72asdasxzczxcvcxzd8ed52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    }, {
      id: "728edpo[op[52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "728edssdqweqeq52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "728eklkltb tbtd52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
    {
      id: "72asdasdolo8ed52f",
      date: "22.05.2024",
      place: "Сопряжение ЗН-154",
      description: "Сверхнормативные отклонения",
    },
  ]
}
export default function Home() {
  const { push } = useRouter()
  const data = getData()

  return (
    <main className="pr-3 pt-3 min-h-screen">
      <DataTable columns={columns} data={data} onClickRow={(original) => { push(original.id) }} />
    </main>
  );
}
