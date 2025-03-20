import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, TextField, IconButton, Box, Stack, CircularProgress, Skeleton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { ProductName } from "../ProductCard/ProductCard.styles";

export const CategoryCard = ({ category }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCategory, setEditedCategory] = useState(category);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleChange = (e, key) => {
    setEditedCategory({ ...editedCategory, [key]: e.target.value });
  };
  const handleSave = () => {
    console.log("Saved Category:", editedCategory);
    setIsEditing(false);
  };

  return category ? (
    <Card
      sx={{
        width: 300,
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        p: 3,
      }}
    >
      {/* Category Image with Loading */}
      <Box sx={{ position: "relative", height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {isImageLoading && (
          <Skeleton variant="rectangular" width="100%" height={300} sx={{ borderRadius: 2 }} />
        )}
        {category.image && (
          <CardMedia
            component="img"
            height="300"
            image={category.image}
            alt={category.name}
            sx={{
              objectFit: "cover",
              borderRadius: 2,
              display: isImageLoading ? "none" : "block",
            }}
            onLoad={() => setIsImageLoading(false)}
            onError={() => setIsImageLoading(false)} // Stops loading if there's an error
          />
        )}
      </Box>

      <CardContent>
        {/* Edit / Delete Buttons */}
        {!isEditing ? (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton onClick={() => alert("Delete action")} color="error">
              <DeleteForeverOutlined />
            </IconButton>
            <IconButton onClick={handleEditToggle} color="primary">
              <EditIcon />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleSave} color="success">
              <SaveIcon />
            </IconButton>
            <IconButton onClick={() => setIsEditing(false)} color="error">
              <CloseIcon />
            </IconButton>
          </Box>
        )}

        {/* Category Name Display */}
        {
          !isEditing ? (
            <Box
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              p: 1,
              backgroundColor: "#fff",
              transition: "0.3s",
              "&:hover": { boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)" },
            }}
          >

<ProductName style={{ textAlign: "center", textDecoration: "underline" }}>
              Name
            </ProductName>
              <ProductName style={{ paddingLeft: 10, textAlign: "center" }}>{category.name}</ProductName>
          </Box>
           
          ): <>hi this will be the form</>
        }
      </CardContent>
    </Card>
  ) : null;
};
