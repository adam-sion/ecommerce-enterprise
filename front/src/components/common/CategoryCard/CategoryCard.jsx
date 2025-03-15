import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, TextField, Button, Box, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { DeleteForeverOutlined, MoreHoriz } from "@mui/icons-material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ProductName } from "../ProductCard/ProductCard.styles";

export const CategoryCard = ({ category }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCategory, setEditedCategory] = useState(category);
  const [expanded, setExpanded] = useState(false);

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleChange = (e, key) => {
    setEditedCategory({ ...editedCategory, [key]: e.target.value });
  };
  const handleSave = () => {
    console.log("Saved Category:", editedCategory);
    setIsEditing(false);
  };

  const entries = Object.entries(category).filter(([key]) => key !== "image" && key !== "__typename");
  const firstEntry = entries[0];
  const remainingEntries = entries.slice(1);

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
        pl:3,
        pr:3
      }}
    >
      {/* Category Image */}
      {category.image && (
        <CardMedia
          component="img"
          height="300"
          image={category.image}
          alt={category.name}
          sx={{ objectFit: "cover", borderRadius: 2 }}
        />
      )}

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

        {/* Key-Value Display (First Entry) */}
        <Stack gap={2} sx={{ marginTop: 3 }}>
          {firstEntry && (
            <Box
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                p: 1,
                backgroundColor: "#fff",
                transition: "0.3s",
                "&:hover": { boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)" },
              }}
              key={firstEntry[0]}
            >
              <ProductName style={{ textAlign: "center", textDecoration: "underline" }}>
                {firstEntry[0].toUpperCase()}:
              </ProductName>

              {isEditing ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={editedCategory[firstEntry[0]]}
                  onChange={(e) => handleChange(e, firstEntry[0])}
                  sx={{ mt: 0.5 }}
                />
              ) : (
                <ProductName style={{ paddingLeft: 10, textAlign: "center" }}>{firstEntry[1]}</ProductName>
              )}
            </Box>
          )}


          {/* Remaining Entries (Only Shown When Expanded) */}
          {expanded &&
            remainingEntries.map(([key, value]) => (
              <Box
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  p: 1,
                  backgroundColor: "#fff",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)" },
                }}
                key={key}
              >
                <ProductName style={{ textAlign: "center", textDecoration: "underline" }}>
                  {key.toUpperCase()}:
                </ProductName>

                {isEditing ? (
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={editedCategory[key]}
                    onChange={(e) => handleChange(e, key)}
                    sx={{ mt: 0.5 }}
                  />
                ) : (
                  <ProductName style={{ paddingLeft: 10, textAlign: "center" }}>{value}</ProductName>
                )}
              </Box>
            ))}
            
          {/* Expand More Button */}
          {remainingEntries.length > 0 && (
            <Box textAlign="center">
              <IconButton onClick={() => setExpanded(!expanded)} color="primary">
                {expanded ? <ExpandLessIcon/> : <MoreHoriz />}
              </IconButton>
            </Box>
          )}
        </Stack>
      </CardContent>
    </Card>
  ) : null;
};
