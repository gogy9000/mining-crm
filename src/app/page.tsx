
import { AppBar } from "@/components/app-bar";
import { ThemeToggler } from "@/components/theme-toggler";

const row = "shadcn / пользовательский интерфей сДокументыКомпонентыТемыПримерыБлокиGitHubПоиск документации ...GitHubTwitterПереключать темуПредставляем режим подъемазнакомьтесь с некоторыми примерамиПанель управления, карты, аутентификация. Несколько примеров, созданных с использованием компонентов. Используйте это как руководство для создания своих собственных.Начало работыКомпонентыПочтаИнформационная панельКартыЗадачиИгровая площадкаФормыМузыкаАутентификация"
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container overflow-auto">
        {row}
        {row}
        {row}
        {row}
        {row}
        {row}
        {row}
        {row}
        {row}
        {row}
        {row}
        {row}
      </div>
    </main>
  );
}
