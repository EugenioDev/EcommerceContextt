import {Link, useParams,} from "react-router-dom";
const Category = ({category}) => {
  return (
   <>
     <Link to={`/categories/${category}`}>
       {category}
     </Link>
   </>

  );
};

export default Category;
