import { Card, CardContent, CardMedia, Typography, IconButton, Box, Stack, Skeleton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleEditToggle = () => setIsEditing(!isEditing);

  return product ? (
    <Card
      sx={{
        width: 350,
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        p: 3,
      }}
    >
      {/* Product Image with Loading */}
      <Box sx={{ position: "relative", height: 250, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {isImageLoading && <Skeleton variant="rectangular" width="100%" height={250} sx={{ borderRadius: 2 }} />}
        {product.image && (
          <CardMedia
            component="img"
            height="250"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: "cover", borderRadius: 2, display: isImageLoading ? "none" : "block" }}
            onLoad={() => setIsImageLoading(false)}
            onError={() => setIsImageLoading(false)}
          />
        )}
      </Box>

      {/* Thumbnails */}
      <Stack direction="row" spacing={1} mt={2} justifyContent="center">
        {product.thumbnails?.map((thumb, index) => (
          <CardMedia
            key={index}
            component="img"
            height="50"
            image={thumb}
            alt={`Thumbnail ${index + 1}`}
            sx={{ width: 50, objectFit: "cover", borderRadius: 1 }}
          />
        ))}
      </Stack>

      <CardContent>
        {/* Edit / Delete Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={() => alert("Delete action")} color="error">
            <DeleteForeverOutlined />
          </IconButton>
          <IconButton onClick={handleEditToggle} color="primary">
            <EditIcon />
          </IconButton>
        </Box>

        {/* Product Details */}
        <Stack spacing={1} mt={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>{product.title}</Typography>
          <Typography variant="body1" color="text.secondary">Price: ${product.price.toFixed(2)}</Typography>
          <Typography variant="body1" color="text.secondary">Materials: {product.materials?.join(", ") || "N/A"}</Typography>
          <Typography variant="body1" color="text.secondary">Stock: {product.stockQuantity}</Typography>
          <Typography variant="body2" color="text.secondary">{product.description}</Typography>
          <Typography variant="caption" color="text.secondary">Created At: {product.createdAt}</Typography>
          <Typography variant="body2" color="primary">Category: {product.category.name}</Typography>
        </Stack>
      </CardContent>
    </Card>
  ) : null;
};
