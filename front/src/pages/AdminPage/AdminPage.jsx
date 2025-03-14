import { Box, CircularProgress, Container } from "@mui/material"
import { useFormik } from "formik";
import CustomButton from "../../components/utils/Button/Button";
import { FormContent, FormWrapper, InputBlock, InputField, InputIcon, InputWrapper, Title } from "../../components/utils/GeneralComponents/GeneralComponents";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import * as Yup from "yup";
import { useState } from "react";
import { TabButton, Tabs } from "../../components/common/ShoppingCartWishlist/styles";
import { RiCheckFill, RiErrorWarningLine, RiImageAddLine, RiUploadCloudLine } from "react-icons/ri";
import CategoryIcon from '@mui/icons-material/Category';
import { BsFillImageFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../features/category/categorySlice";

const categoryValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  image: Yup.mixed().required("Image is required"),
});
const productValidationSchema = Yup.object({
  username: Yup.string().required("Username or Email is required"),
  password: Yup.string().required("Password is required"),
});


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
  const dispatch = useDispatch();
  const formikCategory = useFormik({
    initialValues: {
      name: "",
      image: null,
    },
    validationSchema: categoryValidationSchema,
    onSubmit: async (values) => {
      setButtonsActive(false);
      dispatch(createCategory({ name: values.name, image: values.image }));
      setButtonsActive(true);
  },
  });

  const formikProduct = useFormik({
    initialValues: {
      title: "",
      materials: [],
      image: null,
      description: "",
      stockQuantity: null,
      categoryId: null
    },
    validationSchema: productValidationSchema,
    onSubmit: async (values) => {
      setButtonsActive(false);
   alert('create product');
   setButtonsActive(true);
  },
  });

    const [activeTab, setActiveTab] = useState("product");
    const [buttonsActive, setButtonsActive] = useState(true);



  return (
    
    <Container sx={{marginTop:'30px', marginBottom:'30px', display:'flex', flexDirection:'column', alignItems:'center', gap:'20px'}}>
      <Title>{activeTab === "product" ? "Create product" : "Create caetgory"}</Title>
      <FormWrapper>
        <Tabs>
          <TabButton
            $active={activeTab === "product"}
            onClick={() => {
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
              formikProduct.resetForm();
              // dispatch(resetError());
              // formikLogin.resetForm();
              setActiveTab("category")
            }}
          >
            Create Category
          </TabButton>
        </Tabs>
        {activeTab === "product" && (
          <form onSubmit={(e)=> {
            e.preventDefault();
             alert('hihihihih');
          }}>
              {/* {loginError && <p style={{ color: 'red', textAlign:'center', fontSize:'16px' }}>{loginError}</p>} */}
          <FormContent key="login">
          <InputBlock>
            <InputWrapper>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <InputField type="email"
                  name="username"
                  placeholder="Username or Email"
                  // onChange={formikLogin.handleChange}
                  // onBlur={formikLogin.handleBlur}
                  // value={formikLogin.values.username}/>
                  // {formikLogin.errors.username && formikLogin.touched.username && <RiErrorWarningLine fontSize={'22px'} color="red"}
                   />
              
            </InputWrapper>
            {/* <ErrorMessage touched={formikLogin.touched.username} error={formikLogin.errors.username}/> */}
            </InputBlock>

            <CustomButton
            type="submit"
            active={buttonsActive}
              size="small"
              color="var(--primary-color-dark-2)"
              $invert={true}
            >
             Create
            </CustomButton>
          </FormContent>
          </form>
        )}
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
                <CategoryIcon />
              </InputIcon>
              <InputField type="text"
              placeholder="Name"
              name="name"
               onChange={formikCategory.handleChange}
               onBlur={formikCategory.handleBlur}
               value={formikCategory.values.name} />
              {formikCategory.errors.name && formikCategory.touched.name && <RiErrorWarningLine fontSize={'22px'} color="red"/> }
            
            </InputWrapper>
            <ErrorMessage touched={formikCategory.errors.name} error={formikCategory.errors.name}/>
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
        fontSize: "16px",
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
<RiUploadCloudLine fontSize="20px" color="gray" />
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