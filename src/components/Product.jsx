// How to embed an image that is inside the src folder - (1). import it.... (2). use it
import heropng from "../assets/hero.png" // the "heropng" is an alias.

const Products = ({products}) => {


    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Loop over array of product object */}
                        {
                            products.map(function(pro){
                                return (
                                    <tr key={pro.id}>
                                        <td>{pro.id}</td>
                                        <td>{pro.name}</td>
                                        <td>{pro.price}</td>
                                        <td>{/* How to use an imported image that is inside the src folder */}
                                            <img src={heropng} alt="chopchop logo" style={{maxWidth:"50px"}} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products;
