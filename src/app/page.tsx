
import { AppBar } from "@/components/app-bar";
import { Payment, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { ThemeToggler } from "@/components/theme-toggler";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.

  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728edssd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728eklkld52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "72asdasd8ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728edasdasdasd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728edhjkghjssd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728eklkl5464645d52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "72asdasxzczxcvcxzd8ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }, {
      id: "728edpo[op[52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728edssdqweqeq52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728eklkltb tbtd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "72asdasdolo8ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ]
}
export default async function Home() {
  const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container overflow-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
