import { Box, Button, CircularProgress, Container, IconButton } from "@mui/material"
import { useFormik } from "formik";
import CustomButton from "../../components/utils/Button/Button";
import { FormContent, FormWrapper, InputBlock, InputField, InputIcon, InputWrapper, Title } from "../../components/utils/GeneralComponents/GeneralComponents";
import { FaEnvelope, FaImages, FaLock, FaUser } from "react-icons/fa";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { TabButton, Tabs } from "../../components/common/ShoppingCartWishlist/styles";
import { RiCheckFill, RiDropdownList, RiErrorWarningLine, RiImageAddLine, RiStockFill, RiUploadCloudLine } from "react-icons/ri";
import CategoryIcon from '@mui/icons-material/Category';
import { BsFillImageFill, BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, getCategories } from "../../features/createCategory/categorySlice";
import { showToast } from "../../features/toast/toastSlice";
import { CategoryCard } from "../../components/common/CreateCategoryCard/CategoryCard";
import Modal from "../../components/utils/Modal/Modal";
import styled from "styled-components";
import { Add, Description } from "@mui/icons-material";
import { AiOutlineProduct } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { TbFileDescription } from "react-icons/tb";
import { MdCategory, MdProductionQuantityLimits } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { createProduct } from "../../features/createProduct/createProductSlice";

const categoryValidationSchema = Yup.object().shape({
  name: Yup.string()
      .trim()
      .min(1, "Name cannot be empty")
      .required("Name is required"),
  image: Yup.mixed().required("Image is required"),
});

const productValidationSchema = Yup.object().shape({
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
  categoryId: Yup.number().required("Category is required")

});

const MessageBox = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 4px;
  margin-right: 5px;
  border-radius: 4px;
  background-color: white;
  display: inline-block;
`;


const ErrorMessage = ({touched, error}) => {
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



export const AdminPage = ()=> {
  const {createCategoryLoading} = useSelector((state)=> state.category);
  const {createProductLoading} = useSelector((state)=> state.createProduct);
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const [materials, setMaterials] = useState([]);
  const [materialInput, setMaterialInput] = useState("");

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
        stockQuantity: Number(values.stockQuantity),
        categoryId: Number(values.categoryId)
      };
      console.log(formattedValues);
      setButtonsActive(false);
      const result = await dispatch(createProduct(formattedValues));
      setButtonsActive(true);
      formikProduct.resetForm();
      setMaterials([]);

       if (result.meta.requestStatus === "fulfilled") {
        setProduct(result.payload);
        console.log(result.payload);
      } else {
        dispatch(showToast({ message: "Category creation failed", type: "error" }));
      }
    
  },
  });

  const addMaterial = () => {
    if (materialInput.trim()) {
      setMaterials([...materials, materialInput.trim()]);
      formikProduct.setFieldValue("materials", [...materials, materialInput.trim()]);
      setMaterialInput("");
    }
  };

  const removeMaterial = (index) => {
    const updatedMaterials = materials.filter((_, i) => i !== index);
    setMaterials(updatedMaterials);
    formikProduct.setFieldValue("materials", updatedMaterials);
  };

    const [activeTab, setActiveTab] = useState("product");
    const [buttonsActive, setButtonsActive] = useState(true);
    const [categories, setCategories] = useState([]);

    const handleThumbnailsChange = (event) => {
      const files = Array.from(event.target.files);
      formikProduct.setFieldValue("thumbnails", [...formikProduct.values.thumbnails, ...files]);
    };
  
    const removeThumbnail = (index) => {
      formikProduct.setFieldValue(
        "thumbnails",
        formikProduct.values.thumbnails.filter((_, i) => i !== index)
      );
    };


    useEffect(()=> {
      (async ()=> {
       const result =  await dispatch(getCategories());
       console.log(result.payload);
       setCategories(result.payload);
      })()
    
    }, [])

  return (
    
    <Container sx={{marginTop:'30px', marginBottom:'30px', display:'flex', flexDirection:'column', alignItems:'center', gap:'20px'}}>
      <Title>{activeTab === "product" ? "Create product" : "Create caetgory"}</Title>
     
      <FormWrapper>
        <Tabs>
          <TabButton
            $active={activeTab === "product"}
            onClick={() => {
              setCategory(null);
              formikCategory.resetForm();
              // dispatch(resetError());
              // formikRegister.resetForm();
              setActiveTab("product");
            }}
          >
            Create Product
          </TabButton>
          <TabButton
            $active={activeTab === "category"}
            onClick={() =>{
              setMaterialInput("");
              setMaterials([]);
              formikProduct.resetForm();
              // dispatch(resetError());
              // formikLogin.resetForm();
              setActiveTab("category")
            }}
          >
            Create Category
          </TabButton>
        </Tabs>
        {category && <div style={{ color: 'green', textAlign:'center',fontSize:'16px'}}>
    
      <Modal>
            <Modal.Trigger opens="product-preview">
             <MessageBox>Category created successfully!</MessageBox>
            </Modal.Trigger>
            <Modal.Content name="product-preview">

           <CategoryCard category={category}/>
        
            </Modal.Content>
          </Modal>

     </div> }
        {activeTab === "product" && (
          <form onSubmit={(e)=> {
            e.preventDefault();
             formikProduct.handleSubmit();
          }}>


<FormContent key="product">
  
          <InputBlock>
            <InputWrapper>
              <InputIcon>
                <AiOutlineProduct />
              </InputIcon>
              <InputField type="text"
              placeholder="Title"
              name="title"
               onChange={formikProduct.handleChange}
               onBlur={formikProduct.handleBlur}
               value={formikProduct.values.title} />
              {formikProduct.errors.title && formikProduct.touched.title && <RiErrorWarningLine fontSize={'22px'} color="red"/> }
            
            </InputWrapper>
            <ErrorMessage touched={formikProduct.touched.title} error={formikProduct.errors.title}/>
          </InputBlock>

          <InputBlock>
            <InputWrapper>
              <InputIcon>
                <CiDollar />
              </InputIcon>
              <InputField type="text"
              placeholder="Price"
              name="price"
               onChange={formikProduct.handleChange}
               onBlur={formikProduct.handleBlur}
               value={formikProduct.values.price} />
              {formikProduct.errors.price && formikProduct.touched.price && <RiErrorWarningLine fontSize={'22px'} color="red"/> }
            
            </InputWrapper>
            <ErrorMessage touched={formikProduct.touched.price} error={formikProduct.errors.price}/>
          </InputBlock>

          
          <InputBlock>
            <InputWrapper>
              <InputIcon>
                <MdProductionQuantityLimits />
              </InputIcon>
              <InputField type="text"
              placeholder="Stock quantity"
              name="stockQuantity"
               onChange={formikProduct.handleChange}
               onBlur={formikProduct.handleBlur}
               value={formikProduct.values.stockQuantity} />
              {formikProduct.errors.stockQuantity && formikProduct.touched.stockQuantity && <RiErrorWarningLine fontSize={'22px'} color="red"/> }
            
            </InputWrapper>
            <ErrorMessage touched={formikProduct.touched.stockQuantity} error={formikProduct.errors.stockQuantity}/>
          </InputBlock>


          
          <InputBlock>
            <InputWrapper>
              <InputIcon>
                <TbFileDescription />
              </InputIcon>
              <InputField as={"textarea"}
              placeholder="Description"
              name="description"
               onChange={formikProduct.handleChange}
               onBlur={formikProduct.handleBlur}
               value={formikProduct.values.description} />
              {formikProduct.errors.description && formikProduct.touched.description && <RiErrorWarningLine fontSize={'22px'} color="red"/> }
            
            </InputWrapper>
            <ErrorMessage touched={formikProduct.touched.description} error={formikProduct.errors.description}/>
          </InputBlock>

          <InputBlock>
  <InputWrapper>
    <InputIcon>
      <BsFillImageFill/> {/* Default upload icon */}
    </InputIcon>
    
    {/* Hidden file input */}
    <input
      type="file"
      name="image"
      accept="image/*"
      id="productImageUpload"
      style={{ display: "none" }} // Hide default file input
      onChange={(event) => {
        formikProduct.setFieldValue("image", event.currentTarget.files[0]);
      }}      onBlur={formikProduct.handleBlur}
    />
 <label
      htmlFor="productImageUpload"
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontWeight: "500",
        color: "#333",
        padding: "6px 12px",
        borderRadius: "6px",
      }}
    >
      {
        formikProduct.values.image ? (
          <>
            {formikProduct.values.image.name}
            <RiCheckFill fontSize="22px" color="green" /> 
          </> ):
<>
<RiUploadCloudLine color="gray" />
      Upload Image
</>
      }
      
    </label>


  </InputWrapper>

  <ErrorMessage touched={formikProduct.touched.image} error={formikProduct.errors.image} />
</InputBlock>


<InputBlock>
            <InputWrapper>
            <InputIcon>
      <GiMaterialsScience/> {/* Default upload icon */}
    </InputIcon>
              <InputField type="text" placeholder="Enter material" value={materialInput} onChange={(e) => setMaterialInput(e.target.value)} />
              {formikProduct.errors.materials && formikProduct.touched.materials && <RiErrorWarningLine fontSize={'22px'} color="red"/> }
              <IconButton onClick={addMaterial}><BsPlus/></IconButton>
            </InputWrapper>
            <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop:1}}>
              {materials.map((material, index) => (
                <Box key={index} sx={{ padding: "4px", background: "#f0f0f0", borderRadius: "4px", cursor: "pointer" }} onClick={() => removeMaterial(index)}>
                  {material} ×
                </Box>
              ))}
            </Box>
            <ErrorMessage touched={formikProduct.touched.materials} error={formikProduct.errors.materials} />
          </InputBlock>

           <InputBlock>
        <InputWrapper>
          <InputIcon>
            <FaImages />
          </InputIcon>

          {/* Hidden file input for multiple thumbnails */}
          <input
            type="file"
            accept="image/*"
            id="thumbnailUpload"
            multiple
            style={{ display: "none" }}
            onChange={handleThumbnailsChange}
          />

          <label
            htmlFor="thumbnailUpload"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "500",
              color: "#333",
              padding: "6px 12px",
              borderRadius: "6px",
            }}
          >
            {formikProduct.values.thumbnails.length > 0 ? (
              <>
                {formikProduct.values.thumbnails.length} thumbnail(s) uploaded
                <RiCheckFill fontSize="22px" color="green" />
              </>
            ) : (
              <>
                <RiUploadCloudLine color="gray" />
                Upload Thumbnails
              </>
            )}
          </label>
        </InputWrapper>

        {/* Display uploaded thumbnails */}
        <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop: 1 }}>
          {formikProduct.values.thumbnails.map((image, index) => (
            <Box
              key={index}
              sx={{
                padding: "4px",
                background: "#f0f0f0",
                borderRadius: "4px",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => removeThumbnail(index)}
            >
              <img
                src={URL.createObjectURL(image)}
                alt="Thumbnail"
                style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                ×
              </span>
            </Box>
          ))}
        </Box>

        {/* Validation message for thumbnails */}
        {formikProduct.touched.thumbnails && formikProduct.errors.thumbnails && (
          <RiErrorWarningLine fontSize={"22px"} color="red" />
        )}
      </InputBlock>


          <InputBlock>
  <InputWrapper>
    <InputIcon>
      <MdCategory />
    </InputIcon>
    <select
      name="categoryId"
      value={formikProduct.values.categoryId}
      onChange={formikProduct.handleChange}
      onBlur={formikProduct.handleBlur}
      style={{
        width: "100%",
        padding: "8px",
        border: "0px",

        borderRadius: "4px",

        outline: "none",
        background:"transparent"
      }}
    >
      <option value="" disabled>
        Select Category
      </option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
     
    </select>
    {formikProduct.errors.categoryId && formikProduct.touched.categoryId && (
      <RiErrorWarningLine fontSize={"22px"} color="red" />
    )}
  </InputWrapper>
  <ErrorMessage
    touched={formikProduct.touched.categoryId}
    error={formikProduct.errors.categoryId}
  />
</InputBlock>


          
            <CustomButton
            type="submit"
              size="small"
              color="var(--primary-color-dark-2)"
              $invert={true}
              active={buttonsActive}
            >
              Create
            </CustomButton>
            <span>{createProductLoading ? <CircularProgress sx={{marginLeft:'15px'}} size={'20px'} color="inherit" />: null}</span>
          </FormContent>
          </form>

          )
        }
        {activeTab === "category" && (
          <form onSubmit={(e)=> {
            e.preventDefault();
            formikCategory.handleSubmit(e.target);
          }
          }>
            {/* {signupError === null && verifyEmailMessage && <p style={{ color: 'green', textAlign:'center',fontSize:'16px'}}>{verifyEmailMessage}</p>}
             {signupError && <p style={{ color: 'red', textAlign:'center',fontSize:'16px'}}>{signupError}</p>} */}
          <FormContent key="category">
          <InputBlock>
            <InputWrapper>
              <InputIcon>
                <MdCategory />
              </InputIcon>
              <InputField type="text"
              placeholder="Name"
              name="name"
               onChange={formikCategory.handleChange}
               onBlur={formikCategory.handleBlur}
               value={formikCategory.values.name} />
              {formikCategory.errors.name && formikCategory.touched.name && <RiErrorWarningLine fontSize={'22px'} color="red"/> }
            
            </InputWrapper>
            <ErrorMessage touched={formikCategory.touched.name} error={formikCategory.errors.name}/>
          </InputBlock>
         

          <InputBlock>
  <InputWrapper>
    <InputIcon>
      <BsFillImageFill/> {/* Default upload icon */}
    </InputIcon>
    
    {/* Hidden file input */}
    <input
      type="file"
      name="image"
      accept="image/*"
      id="imageUpload"
      style={{ display: "none" }} // Hide default file input
      onChange={(event) => {
        formikCategory.setFieldValue("image", event.currentTarget.files[0]);
      }}      onBlur={formikCategory.handleBlur}
    />
 <label
      htmlFor="imageUpload"
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontWeight: "500",
        color: "#333",
        padding: "6px 12px",
        borderRadius: "6px",
      }}
    >
      {
        formikCategory.values.image ? (
          <>
            {formikCategory.values.image.name}
            <RiCheckFill fontSize="22px" color="green" /> 
          </> ):
<>
<RiUploadCloudLine color="gray" />
      Upload Image
</>
      }
      
    </label>


  </InputWrapper>

  <ErrorMessage touched={formikCategory.touched.image} error={formikCategory.errors.image} />
</InputBlock>

          
            <CustomButton
            type="submit"
              size="small"
              color="var(--primary-color-dark-2)"
              $invert={true}
              active={buttonsActive}
            >
              Create
            </CustomButton>
            <span>{createCategoryLoading ? <CircularProgress sx={{marginLeft:'15px'}} size={'20px'} color="inherit" />: null}</span>
          </FormContent>
          </form>
        )}
      </FormWrapper>

    </Container>
  );
};