import Tittle from "./Tittle"
import InfoSection from "./InfoSection"

import { ChevronDown, ChartSpline, PackageSearch } from "lucide-react"

const InfoData = [
  { title: "Receita Total", value: "R$ 232.254,00" },
  { title: "Receita de Produtos", value: "R$ 32.254,00" },
  { title: "Receita de Serviços", value: "R$ 200.000,00" },
  { title: "Pedidos de Vendas", value: "2943" }
]

const topProducts = [
  { code: "ABD021", product: "Cachaça Premium", sales: "R$ 10.000,00" },
  { code: "ABD021", product: "Cachaça de Mel", sales: "R$ 8.000,00" },
  { code: "ABD021", product: "Cachaça de Banana", sales: "R$ 6.000,00" },
  { code: "ABD021", product: "Kit degustação", sales: "R$ 4.000,00" },
]

export default function Body() {
  return (
    <body className="flex flex-col p-2">
      <article className="flex justify-center items-center h-full">
        <Tittle
          name="Resumo"
          icon={
            <ChartSpline className="text-secondary-light p-1 md:p-0" />
          }
        />
      </article>
      <article className="flex justify-center md:justify-start p-4">
        <section className="flex items-center gap-2 bg-white shadow-md rounded py-2 px-4">
          <p className="text-sm md:text-lg">
            Jan 2024 - Ago 2024
          </p>
          <ChevronDown className="text-secondary-light p-1 md:p-0" />
        </section>
      </article>
      <article className="grid grid-cols-2 lg:grid-cols-4 grid-auto justify-center p-2 md:p-4 gap-4">
        {
          InfoData.map((data, index) => {
            return (
              <InfoSection
                key={index}
                title={data.title}
                value={data.value}
              />
            )
          })
        }
      </article>
      <article className="flex flex-col items-center justify-center h-full">
        <Tittle
          name="Top Produtos"
          icon={<PackageSearch className="text-secondary-light p-1 md:p-0" />}
        />
        <section className="text-xs md:text-base bg-white border rounded p-4 mt-4 w-full md:w-3/4">
          <ul>
            {topProducts.map((product, index) => (
              <li key={index} className="flex justify-between p-2">
                <span className="font-semibold flex">
                  <span className="text-primary hidden md:flex">Cód: </span>
                  {product.code}
                </span>
                <span className="font-semibold flex">
                  <span className="text-primary hidden md:flex">Produto: </span>
                  {product.product}
                </span>
                <span className="font-semibold flex">
                  <span className="text-primary">Vendas: </span>
                  {product.sales}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </body>
  )
}