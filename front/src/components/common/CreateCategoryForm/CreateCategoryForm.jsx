import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../features/createCategory/categorySlice";
import { CategoryCard } from "../CreateCategoryCard/CategoryCard";
import { FormContent, InputBlock, InputField, InputIcon, InputWrapper } from "../../utils/GeneralComponents/GeneralComponents";
import { MdCategory } from "react-icons/md";
import { RiCheckFill, RiUploadCloudLine } from "react-icons/ri";
import CustomButton from "../../utils/Button/Button";
import { ErrorMessage, MessageBox } from "../../../pages/AdminPage/AdminPage";
import { useEffect } from "react";
import { BsFillImageFill } from "react-icons/bs";
import Modal from "../../utils/Modal/Modal";


export const CreateCategoryForm = ({formikCategory, category, buttonsActive})=> {
  const {createCategoryLoading} = useSelector((state)=> state.category);

  return (   
<>

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
      
        {(
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
        </>
  )
        }