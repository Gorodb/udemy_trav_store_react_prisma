import {sampleData} from "@/db/sample-data"
import {ProductList} from "@/components/shared/product/Product-list";

export default function Homepage() {
  return (
    <>
      <ProductList data={sampleData} title="Newest Arrivals" limit={4} />
    </>
  )
}