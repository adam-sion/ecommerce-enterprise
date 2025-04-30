import { Card, CardContent, IconButton, Box, Stack, Grid, Dialog, DialogContent, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";
import { useEffect, useState } from "react";
import { MoreHorizRounded } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { createProduct, deleteProduct } from "../../../features/createProduct/createProductSlice";
import { CreateProductForm } from "../CreateProductForm/CreateProductForm";
import { useFormik } from "formik";
import { productValidationSchema } from "../AdminForm/AdminForm";
import { showToast } from "../../../features/toast/toastSlice";
import Image from '../Image/Image';




export const ProductCard = ({ originalProduct, narrowColumns }) => {
  const [product, setProduct] = useState(originalProduct);

  const formikProduct = useFormik({
    initialValues: {
      id: product?.id || '',
      title: product?.title || '',
      materials: product?.materials || '',
      thumbnails: product?.thumbnails || [],
      image: product?.image || '',
      sizes: product?.sizes || [],
      description: product?.description || '',
      price: product?.price || 0,
      stockQuantity: product?.stockQuantity || 0,
      categoryId: product?.category?.id || '',
    },
    validationSchema: productValidationSchema,
    onSubmit: async (values) => {
  
      const formattedValues = {
        ...values,
        price: Number(values.price),
        stockQuantity: values.stockQuantity === "" ? 3 : Number(values.stockQuantity),
        categoryId: values.categoryId,
      };
  
      setButtonsActive(false);
      const result = await dispatch(createProduct(formattedValues));
      setButtonsActive(true);

  
      if (result.meta.requestStatus === "fulfilled") {
        setProduct(result.payload);
        dispatch(showToast({ message: "Product update success", type: "success" }));
      } else {
        dispatch(showToast({ message: "Product update failed", type: "error" }));
      }
    },
  });

useEffect(() => {
  if (product) {
    formikProduct.setValues({
      id: product.id,
      title: product.title,
      materials: product.materials,
      thumbnails: product.thumbnails,
      image: product.image,
      sizes: product.sizes,
      description: product.description,
      price: product.price,
      stockQuantity: product.stockQuantity,
      categoryId: product.category.id,
    });
  }
}, [product]);

  const dispatch = useDispatch();
  const [buttonsActive, setButtonsActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [loadingThumbnails, setLoadingThumbnails] = useState(
    Array(product?.thumbnails?.length || 0).fill(true)
  );

 


  const makeDeleteProductRequest = (product) => {
    Swal.fire({
      title: `Are you sure you want to delete '${product.title}'?`,
      width: 650,
      padding: 70,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
        popup: 'custom-swal-popup'
      },
      preConfirm: async () => {
        // Show a loading indicator while deleting
        Swal.showLoading();
  
        const result = await dispatch(deleteProduct(product.id));
  
        if (result.meta.requestStatus === "fulfilled") {
          return true;
        } else {
          throw new Error("Failed to delete product.");
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success');
      }
    }).catch((err) => {
      Swal.fire('Deletion failed', err.message, 'error');
    });
  }; 

  return product ? (
    <Card
      sx={{
       
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
        height: '100%',
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        p: 3,
        cursor: "pointer",
      }}
      onClick={() => setShowFullDetails(!showFullDetails)}
    >
      {/* Product Image with Loading */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          height="90%"
          width="90%"
          objectFit="cover"
          borderRadius={2}
        />
      </Box>

      {/* Thumbnails */}
    {  product.thumbnails.length === 0 ? (
  <Stack direction="row" spacing={1} mt={2} justifyContent="center">
    <Box key="empty" sx={{ position: "relative", width: 50, height: 50 }}></Box>
  </Stack>
) : (
  <Stack direction="row" spacing={1} mt={2} justifyContent="center">
    {product.thumbnails?.map((thumb, index) => (
      <Box key={index} sx={{ position: "relative", width: 50, height: 50 }}>
        <Image
          src={thumb}
          alt={`Thumbnail ${index + 1}`}
          width={50}
          height={50}
          objectFit="cover"
          borderRadius={4}
        />
      </Box>
    ))}
  </Stack>
)}

     

      {/* Product Details Grid */}
      <CardContent sx={{ display: "flex", justifyContent: "center", marginTop:5 }}>
      <Grid container spacing={3}>
  {/* Left Column */}
  <Grid item xs={12} sx={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
  <Box sx={{ 
  display: "flex", 
  justifyContent: "center", 
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 10, 
  borderRadius: "8px", 
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  padding:1
}}>
  <Box>
        <Box fontWeight="bold" textDecoration="underline">Title</Box>
        <Box>{product.title}</Box>
      </Box>

      <Box>
        <Box fontWeight="bold" textDecoration="underline">Price</Box>
        <Box>${product.price.toFixed(2)}</Box>
      </Box>
 

    </Box>
  </Grid>


{
  showFullDetails && (
    <>
     <Grid item xs={12}>
    <Box sx={{ 
      
        display: "flex",  
        flexDirection: narrowColumns ? 'column' : 'row',
        justifyContent: 'center',  
        gap: narrowColumns ? 2 : 10
    }}>
        <Grid item xs={narrowColumns ? 12 : 4}>
            <Box fontWeight="bold" textDecoration="underline">Stock</Box>
            <Box>{product.stockQuantity}</Box>
        </Grid>

        <Grid item xs={narrowColumns ? 12 : 4}>
            <Box fontWeight="bold" textDecoration="underline">Category</Box>
            <Box>{product.category.name}</Box>
        </Grid>

        <Grid item xs={narrowColumns ? 12 : 4}>
            <Box fontWeight="bold" textDecoration="underline">Created</Box>
            <Box>{new Date(product.createdAt).toLocaleDateString()}</Box>
        </Grid>
    </Box>
  </Grid>
  
  {/* Right Column */}
  <Grid item xs={12}>
    <Box sx={{ display: "flex", flexDirection: narrowColumns ? 'column' : 'row', justifyContent:'center', gap:narrowColumns ? 2 : 10 }}>
    <Grid item xs={narrowColumns ? 12 : 4}>
    <Box fontWeight="bold" textDecoration="underline">Sizes</Box>
    <Box>{product.sizes?.join(", ") || "N/A"}</Box>
    </Grid>
    <Grid item xs={narrowColumns ? 12 : 8}>
        <Box fontWeight="bold" textDecoration="underline">Materials</Box>
        <Box>{product.materials?.join(", ") || "N/A"}</Box>
      </Grid>
    </Box>
  </Grid>
  

  <Grid item xs={12}>
    <Box sx={{ display: "flex", flexDirection: "row" }}>
 
    <Grid item xs = {12}>
        <Box fontWeight="bold" textDecoration="underline">Description</Box>
        <Box>{product.description}</Box>
      </Grid>
    </Box>
  </Grid>
    
    </>
  )
}
 

</Grid>

      </CardContent>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <IconButton 
          onClick={(e) => { 
            e.stopPropagation(); 
            makeDeleteProductRequest(product); 
          }} 
          color="error"
        >
          <DeleteForeverOutlined />
        </IconButton>
        <IconButton 
          onClick={(e) => { 
            e.stopPropagation(); 
            setIsModalOpen(true); 
          }} 
          color="primary"
        >
          <EditIcon />
        </IconButton>
      </Box>





      <Dialog
        open={isModalOpen}

        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth={true}
      >
        <DialogContent>
          <CreateProductForm
          showCreateProduct={false}
            product={product}
            setProduct={setProduct}
            formikProduct={formikProduct}
            buttonsActive={buttonsActive}
          />
        </DialogContent>
      
      </Dialog>


    </Card>
  ) : null;
};
