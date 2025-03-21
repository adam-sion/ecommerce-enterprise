import { Card, CardContent, IconButton, Box, Stack, Skeleton, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";
import { BsBox } from "react-icons/bs";

export const ProductCard = ({ product }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [loadingThumbnails, setLoadingThumbnails] = useState(
    Array(product?.thumbnails?.length || 0).fill(true)
  );

  return product ? (
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

      {/* Product Details Grid */}
      <CardContent sx={{ display: "flex", justifyContent: "center", marginTop:5 }}>
      <Grid container spacing={3}>
  {/* Left Column */}
  <Grid item xs={4}>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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

  <Grid item xs={4}>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

      <Box>
        <Box fontWeight="bold" textDecoration="underline">Stock</Box>
        <Box>{product.stockQuantity}</Box>
      </Box>

      <Box>
        <Box fontWeight="bold" textDecoration="underline">Category</Box>
        <Box>{product.category.name}</Box>
      </Box>

    </Box>
  </Grid>
  
  {/* Right Column */}
  <Grid item xs={4}>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box>
        <Box fontWeight="bold" textDecoration="underline">Description</Box>
        <Box>{product.description}</Box>
      </Box>

      <Box>
        <Box fontWeight="bold" textDecoration="underline">Materials</Box>
        <Box>{product.materials?.join(", ") || "N/A"}</Box>
      </Box>
    </Box>
  </Grid>

  <Grid item xs={4}>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <Box>
        <Box fontWeight="bold" textDecoration="underline">Created At</Box>
        <Box>{new Date(product.createdAt).toLocaleDateString()}</Box>
      </Box>
    </Box>
  </Grid>

</Grid>

      </CardContent>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <IconButton onClick={(e) => { e.stopPropagation(); alert("Delete action"); }} color="error">
          <DeleteForeverOutlined />
        </IconButton>
        <IconButton onClick={(e) => { e.stopPropagation(); alert("Edit action"); }} color="primary">
          <EditIcon />
        </IconButton>
      </Box>
    </Card>
  ) : null;
};
