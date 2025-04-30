import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../features/createCategory/categorySlice";
import { FormContent, InputBlock, InputField, InputIcon, InputWrapper } from "../../utils/GeneralComponents/GeneralComponents";
import { AiOutlineProduct } from "react-icons/ai";
import { RiCheckFill, RiErrorWarningLine, RiUploadCloudLine } from "react-icons/ri";
import { GiMaterialsScience } from "react-icons/gi";
import { FaImages } from "react-icons/fa";
import { MdCategory, MdFormatSize, MdProductionQuantityLimits } from "react-icons/md";
import { Box, CircularProgress, Dialog, DialogContent, Grid, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { CiDollar } from "react-icons/ci";
import { TbFileDescription } from "react-icons/tb";
import { BsFillImageFill, BsPlus } from "react-icons/bs";
import CustomButton from "../../utils/Button/Button";
import Modal from "../../utils/Modal/Modal";
import { ProductCard } from "../CreateProductCard/ProductCard";
import { ErrorMessage, MessageBox } from "../AdminForm/AdminForm";

export const CreateProductForm = ({formikProduct, product, setProduct, buttonsActive, showCreateProduct})=> {
  const {createProductLoading} = useSelector((state)=> state.createProduct);
  const dispatch = useDispatch();
  const [materials, setMaterials] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [materialInput, setMaterialInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
const materialInputRef = useRef(null);
const sizeInputRef = useRef(null);

useEffect(()=> {
  if (product !== null) {
    if (product.materials !== null) 
setMaterials(product.materials);
    

    if (product.sizes !== null) 
setSizes(product.sizes);
  }
},[])

  const addMaterial = () => {
    if (materialInput.trim()) {
      setMaterials([...materials, materialInput.trim()]);
      formikProduct.setFieldValue("materials", [...materials, materialInput.trim()]);
      setMaterialInput("");
      materialInputRef.current?.focus();
    }
  };

  const handleMaterialKeyDown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
      addMaterial();
    }
  };

  const removeMaterial = (index) => {
    const updatedMaterials = materials.filter((_, i) => i !== index);
    setMaterials(updatedMaterials);
    formikProduct.setFieldValue("materials", updatedMaterials);
  };

  const addSize = () => {
    if (sizeInput.trim()) {
      setSizes([...sizes, sizeInput.trim()]);
      formikProduct.setFieldValue("sizes", [...sizes, sizeInput.trim()]);
      setSizeInput("");
      sizeInputRef.current?.focus();
    }
  };

  const handleSizeKeyDown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
      addSize();
    }
  };

  const removeSize = (index) => {
    const updatedSizes = sizes.filter((_, i) => i !== index);
    setSizes(updatedSizes);
    formikProduct.setFieldValue("sizes", updatedSizes);
  };

    const {categories} = useSelector((state)=> state.category);

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

      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

  return (
       <>
   <Dialog

  open={isModalOpen}
  onClose={handleCloseModal}
  PaperProps={{
    sx: {
      width: '50%',          // Custom width

    },
  }}
>
  <DialogContent>
    <ProductCard originalProduct={product} />
  </DialogContent>
</Dialog>
       {showCreateProduct && product && <div style={{ color: 'green', textAlign:'center',fontSize:'16px'}}>
       <Box sx={{ maxHeight:'60%',maxWidth: 550, mx: "auto" }}>
              
         
                  <MessageBox onClick={()=> setIsModalOpen(true)}>Product created successfully!</MessageBox>
    

               </Box>
               </div>
               }
        {(
          <form onSubmit={(e)=> {
            e.preventDefault();
             formikProduct.handleSubmit();
             setMaterialInput("");
             setSizeInput("");
        
             {
              if (showCreateProduct) {
                setMaterials([]);
                setSizes([]);
              }
              
             }
             
          }}>


<FormContent key="product">
<Grid container spacing={3}>
<Grid item xs={12} md={6}>
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
                <TbFileDescription/>
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

          </Grid>

          <Grid item xs={12} md={6}>

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
            {(formikProduct.values.image instanceof File) ? formikProduct.values.image.name :`${formikProduct.values.title}.jpg`}
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
              <InputField type="text" placeholder="Enter material" value={materialInput} onKeyDown={handleMaterialKeyDown} ref={materialInputRef} onChange={(e) => setMaterialInput(e.target.value)} />
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
      <MdFormatSize/> {/* Default upload icon */}
    </InputIcon>
              <InputField type="text" placeholder="Enter size" value={sizeInput} onKeyDown={handleSizeKeyDown} ref={sizeInputRef} onChange={(e) => setSizeInput(e.target.value)} />
              {formikProduct.errors.sizes && formikProduct.touched.sizes && <RiErrorWarningLine fontSize={'22px'} color="red"/> }
              <IconButton onClick={addSize}><BsPlus/></IconButton>
            </InputWrapper>
            <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop:1}}>
              {sizes.map((size, index) => (
                <Box key={index} sx={{ padding: "4px", background: "#f0f0f0", borderRadius: "4px", cursor: "pointer" }} onClick={() => removeSize(index)}>
                  {size} ×
                </Box>
              ))}
            </Box>
            <ErrorMessage touched={formikProduct.touched.sizes} error={formikProduct.errors.sizes} />
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
                src={(image instanceof File) ? URL.createObjectURL(image): image} 
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
      {categories.length > 0 && categories.map((category) => (
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
</Grid>

<Grid item xs={12} md={6}>
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
    </Grid>
          
            </Grid>
          </FormContent>
          </form>

          )
        }
   </>
  );
};