import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
       const getProduct = async () =>{
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false)

       }
       getProduct();
    }, []);

    const Loading = () =>{
        return(
            <>
               Loading....
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
               <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px" />

               </div>
            </>
        )
    }

  return (

    <div>
      <div className='container'>
            <div className="row">
                {loading? <Loading /> : <ShowProduct />}
            </div>
        </div>
    </div>
  )
}
