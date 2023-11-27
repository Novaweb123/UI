import {useEffect, useState} from "react";

const useAddPurchaseItems = () => {
    const [productCategoryItems,setProductCategory] = useState({});
    const [ids, setID] = useState({})
    const [discountData,setDiscountData] = useState([]);

    return {
        setProductCategory,
        productCategoryItems,
        ids,
        setID,
        discountData,
        setDiscountData

      
    }
}
export default useAddPurchaseItems;


