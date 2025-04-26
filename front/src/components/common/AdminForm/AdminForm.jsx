import { Box, Button, CircularProgress, Container, IconButton } from "@mui/material"
import { useFormik } from "formik";
import { FormContent, FormWrapper, InputBlock, InputField, InputIcon, InputWrapper, Title } from "../../../components/utils/GeneralComponents/GeneralComponents";
import { FaEnvelope, FaImages, FaLock, FaUser } from "react-icons/fa";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { TabButton, Tabs } from "../../../components/common/ShoppingCartWishlist/styles";
import { RiCheckFill, RiDropdownList, RiErrorWarningLine, RiImageAddLine, RiStockFill, RiUploadCloudLine } from "react-icons/ri";
import CategoryIcon from '@mui/icons-material/Category';
import { BsFillImageFill, BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, getCategories } from "../../../features/createCategory/categorySlice";
import { showToast } from "../../../features/toast/toastSlice";
import Modal from "../../../components/utils/Modal/Modal";
import styled from "styled-components";
import { Add, Description } from "@mui/icons-material";
import { AiOutlineProduct } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { TbFileDescription } from "react-icons/tb";
import { MdCategory, MdProductionQuantityLimits } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { createProduct } from "../../../features/createProduct/createProductSlice";
import { CreateProductForm } from "../../../components/common/CreateProductForm/CreateProductForm";
import { CreateCategoryForm } from "../../../components/common/CreateCategoryForm/CreateCategoryForm";

const categoryValidationSchema = Yup.object().shape({
  name: Yup.string()
      .trim()
      .min(1, "Name cannot be empty")
      .required("Name is required"),
  image: Yup.mixed().required("Image is required"),
});

export const productValidationSchema = Yup.object().shape({
  title: Yup.string()
      .trim()
      .min(1, "Title cannot be empty")
      .required("Title is required"),
  description: Yup.string()
      .trim()
      .min(1, "Description cannot be empty")
      .required("Description is required"),
  price: Yup.number().required("price is required")
      .typeError("Price must be a valid number")
      .min(0, "Price must be positive")
      .max(100000000, "max price reached"),  
  stockQuantity: Yup.number().notRequired()
      .typeError("Stock quantity must be a valid number")
      .min(0, "Stock quantity must be positive")
      .max(100000000, "max stock reached"),  
  image: Yup.mixed().required("Image is required"),
  thumbnails: Yup.array()
  .of(Yup.mixed().required("Each thumbnail is required"))
  .notRequired(),
  sizes: Yup.array()
  .of(Yup.mixed().required("Each size is required"))
  .required("Sizes field is required"),
  categoryId: Yup.string().required("Category is required")

});

export const MessageBox = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 4px;
  margin-right: 5px;
  border-radius: 4px;
  background-color: white;
  display: inline-block;
`;


export const ErrorMessage = ({touched, error}) => {
  return (touched &&
    <Box
      sx={{
        color: 'red',
        fontSize: '0.875rem',
        marginTop: '0.25rem',
        paddingLeft: 'var(--spacing-xs)', // You can pass this as a prop if needed
      }}
    >
      {error}
    </Box>
  );
};



export const AdminForm = ()=> {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

  const formikCategory = useFormik({
    initialValues: {
      name: "",
      image: null,
    },
    validationSchema: categoryValidationSchema,
    onSubmit: async (values) => {
      setButtonsActive(false);
      const result = await dispatch(createCategory({ name: values.name, image: values.image }));
      setButtonsActive(true);
      formikCategory.resetForm();

       if (result.meta.requestStatus === "fulfilled") {
        setCategory(result.payload);
      
      } else {
        dispatch(showToast({ message: "Category creation failed", type: "error" }));
      }
    
  },
  });

  const formikProduct = useFormik({
    initialValues: {
      title: "",
      materials: [],
      thumbnails: [],
      sizes:[],
      image: null,
      description: "",
      price:"",
      stockQuantity:"",
      categoryId: ""
    },
    validationSchema: productValidationSchema,
    onSubmit: async (values) => {
      const formattedValues = {
        ...values,
        price: Number(values.price),
        stockQuantity: values.stockQuantity === "" ? 3 : Number(values.stockQuantity),
        categoryId: values.categoryId
      };
      setButtonsActive(false);
      const result = await dispatch(createProduct(formattedValues));
      setButtonsActive(true);
      formikProduct.resetForm();
     
     
       if (result.meta.requestStatus === "fulfilled") {
        
        setProduct(result.payload);
      } else {
        dispatch(showToast({ message: "Product creation failed", type: "error" }));
      }
    
  },
  });

    const [activeTab, setActiveTab] = useState("product");
    const [buttonsActive, setButtonsActive] = useState(true);


  return (
    
    <Container sx={{marginTop:'30px', marginBottom:'30px', display:'flex', flexDirection:'column', alignItems:'center', gap:'20px'}}>
      <Title>{activeTab === "product" ? "Create product" : "Create caetgory"}</Title>
     
      <Box sx={{width:'80%'}}>
        <Tabs>
          <TabButton
            $active={activeTab === "product"}
            onClick={() => {
              setCategory(null);
              formikCategory.resetForm();
              setActiveTab("product");
            }}
          >
            Create Product
          </TabButton>
          <TabButton
            $active={activeTab === "category"}
            onClick={() =>{
              setProduct(null);
              formikProduct.resetForm();
              setActiveTab("category")
            }}
          >
            Create Category
          </TabButton>
        </Tabs>
    <Box>
    {activeTab === "product"
          && <CreateProductForm showCreateProduct={true} product={product} setProduct={setProduct} formikProduct={formikProduct} buttonsActive={buttonsActive}/>
        }
    </Box>
       <Box>
       {activeTab === "category"
        && <CreateCategoryForm showCreateCategory={true} category={category} formikCategory={formikCategory} buttonsActive={buttonsActive} />
        }
       </Box>

        
      </Box>

    </Container>
  );
};