import { useParams } from "react-router-dom"
import { products } from "../data/products"

const ProductInfo = () => {
    // useParams() 훅을 사용하여 url에서 id 값을 가져옴
    const { id } = useParams()

    // id로 데이터 검색-find()
    // products/1 -> 문자 "1", 정수로 형변환 parseInt()
    const product = products.find((p) => p.id === parseInt(id))
    console.log("검색한 상품", product)

    return (
        <section className="product-info">
            <h1>상품 정보</h1>
            <p>상품 ID: {id}</p>
            <p>상품명: {product.name}</p>
            <p>가격: {product.price}</p>
            <p>설명: {product.description}</p>
        </section>
    )
}

export default ProductInfo