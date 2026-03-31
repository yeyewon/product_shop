import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

    const [formdata, setFormData] = useState({
        name: "",
        price: "",
        description: ""
    }) 

    // 페이지 이동 hook
    const navigate = useNavigate()

    // 입력값 변경
    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target

        setFormData({
            ...formdata,
            [name]: value // 변경된 값만 업데이트
        })
    }

    // form 제출
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log("상품추가",formdata);

        // 입력값 검증
        if(!formdata.name.trim() || !formdata.price.trim() || !formdata.description.trim()) {
            alert("모든 필드를 입력해주세요");
            return;
        }
            
        // 가격 검증
        if(isNaN(formdata.price) || formdata.price <= 0) {
            alert("모든 필드를 입력해주세요");
            return;
        }
        console.log("상품추가", formdata)
        alert("상품이 등록되었습니다")

        // 상품 목록페이지로 이동
        navigate("/products")
    }

    // 취소 버튼 처리
    const handleCancle = () => {
        // 폼 초기화
        setFormData({
            name: "",
            price: "",
            description: ""
        })
    }

    return (
        <section className="add-product">
            <h2>상품 등록</h2>
            <form onSubmit={handlesubmit} className="add-form">
                <div>
                    <label htmlFor="name">상품명</label>
                    <input 
                        type="text" 
                        placeholder="상품명을 입력하세요"
                        id="name"
                        name="name"
                        value={formdata.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input 
                        type="number" 
                        placeholder="가격을 입력하세요"
                        min={1}
                        id="price"
                        name="price"
                        value={formdata.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">설명</label>
                    <textarea 
                        placeholder="상품 설명을 입력하세요"
                        rows={5}
                        cols={30}
                        name="description"
                        value={formdata.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">등록</button>
                    <button type="button" onClick={handleCancle}>취소</button>
                </div>
            </form>
        </section>
    )
}

export default AddProduct