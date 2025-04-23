import { Card, CardContent, IconButton, Box, Stack, Skeleton, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";
import { MoreHorizRounded } from "@mui/icons-material";
import Swal from "sweetalert2";


const makeDeleteProductRequest = (product)=> {
  Swal.fire({
    title: `Are you sure you want to delete '${product.title}' ?`,
    width: 700, // makes the modal bigger
    padding:70,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    customClass: {
      actions: 'my-actions',       // space between buttons
      confirmButton: 'order-2',
      denyButton: 'order-3',
      popup: 'custom-swal-popup'   // optional: custom styling for popup
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', '', 'success');
    } else if (result.isDenied) {
      // Optionally handle denial
    }
  });
}  

export const ProductCard = ({ product }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [loadingThumbnails, setLoadingThumbnails] = useState(
    Array(product?.thumbnails?.length || 0).fill(true)
  );

  return isEditMode ? <>edit</> :
   product ? (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        p: 3,
        cursor: "pointer",
      }}
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
        {isImageLoading && (
          <Skeleton variant="rectangular" width="100%" height={250} sx={{ borderRadius: 2 }} />
        )}
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            height="400"
            width="300"
            style={{
              objectFit: "cover",
              borderRadius: 2,
              display: isImageLoading ? "none" : "block",
            }}
            onLoad={() => setIsImageLoading(false)}
            onError={() => setIsImageLoading(false)}
          />
        )}
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
        {loadingThumbnails[index] && (
          <Skeleton variant="rectangular" width={50} height={50} sx={{ borderRadius: 4 }} />
        )}
        <img
          src={thumb}
          alt={`Thumbnail ${index + 1}`}
          height="50"
          width="50"
          style={{
            objectFit: "cover",
            borderRadius: 4,
            display: loadingThumbnails[index] ? "none" : "block",
          }}
          onLoad={() =>
            setLoadingThumbnails((prev) =>
              prev.map((loading, i) => (i === index ? false : loading))
            )
          }
          onError={() =>
            setLoadingThumbnails((prev) =>
              prev.map((loading, i) => (i === index ? false : loading))
            )
          }
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
  flexDirection: "row", 
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
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent:'center', gap: 10 }}>

    <Grid item xs = {4}>
        <Box fontWeight="bold" textDecoration="underline">Stock</Box>
        <Box>{product.stockQuantity}</Box>
      </Grid>

      <Grid item xs = {4}>
        <Box fontWeight="bold" textDecoration="underline">Category</Box>
        <Box>{product.category.name}</Box>
      </Grid>

      <Grid item xs = {4}>
        <Box fontWeight="bold" textDecoration="underline">Created</Box>
        <Box>{new Date(product.createdAt).toLocaleDateString()}</Box>
      </Grid>

    </Box>
  </Grid>
  
  {/* Right Column */}
  <Grid item xs={12}>
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent:'center', gap:10 }}>
    <Grid item xs = {4}>
    <Box fontWeight="bold" textDecoration="underline">Sizes</Box>
    <Box>{product.sizes?.join(", ") || "N/A"}</Box>
    </Grid>
    <Grid item xs = {4}>
        <Box fontWeight="bold" textDecoration="underline">Materials</Box>
        <Box>{product.materials?.join(", ") || "N/A"}</Box>
      </Grid>
     
      <Grid item xs = {4}>
        <Box fontWeight="bold" textDecoration="underline">Created</Box>
        <Box>{new Date(product.createdAt).toLocaleDateString()}</Box>
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
        <IconButton onClick={(e) => { e.stopPropagation(); makeDeleteProductRequest(product); }} color="error">
          <DeleteForeverOutlined />
        </IconButton>
        <IconButton onClick={(e) => { e.stopPropagation(); setIsEditMode(true); }} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton onClick={(e) => { e.stopPropagation(); setShowFullDetails(!showFullDetails); }} color="default">
            <MoreHorizRounded />
          </IconButton>
      </Box>
    </Card>
  ) : null;
};
