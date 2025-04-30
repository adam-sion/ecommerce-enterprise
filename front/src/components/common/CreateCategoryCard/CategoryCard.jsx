import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Box,
  Stack,
  Skeleton,
  Dialog,
  DialogContent,
} from "@mui/material";
import * as Yup from "yup";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { ProductName } from "../ProductCard/ProductCard.styles";
import { createCategory, deleteCategory } from "../../../features/createCategory/categorySlice";
import { CreateCategoryForm } from "../CreateCategoryForm/CreateCategoryForm";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import Image from '../Image/Image';
import { showToast } from "../../../features/toast/toastSlice";

const categoryValidationSchema = Yup.object().shape({
  name: Yup.string()
      .trim()
      .min(1, "Name cannot be empty")
      .required("Name is required"),
  image: Yup.mixed().required("Image is required"),
});




export const CategoryCard = ({ originalCategory }) => {
const [category, setCategory] = useState(originalCategory);


const dispatch = useDispatch();
const [buttonsActive, setButtonsActive] = useState(true);
const [isModalOpen, setIsModalOpen] = useState(false);


const makeDeleteCategorytRequest = (category) => {
  Swal.fire({
    title: `Are you sure you want to delete '${category.name}'?`,
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

      const result = await dispatch(deleteCategory(category.id));

      if (result.meta.requestStatus === "fulfilled") {
        return true;
      } else {
        throw new Error("Failed to delete category.");
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

const handleCloseModal = () => {
  setIsModalOpen(false);
};


  const formikCategory = useFormik({
    initialValues: {
      id: category?.id,
      name: category?.name,
      image: category?.image,
    },
    validationSchema: categoryValidationSchema,
    onSubmit: async (values) => {
      setButtonsActive(false);
      const result = await dispatch(createCategory({ name: values.name, id: values.id, image: values.image }));
      setButtonsActive(true);
      formikCategory.resetForm();

       if (result.meta.requestStatus === "fulfilled") {
        setCategory(result.payload);
        dispatch(showToast({ message: "Category update success", type: "success" }));
      } else {
        dispatch(showToast({ message: "Category creation failed", type: "error" }));
      }
    
  },
  });

  const [isImageLoading, setIsImageLoading] = useState(true);


  useEffect(() => {
    if (category) {
      formikCategory.setValues({
        id: category.id,
        name: category.name,
        image: category.image
      });
    }
  }, [category]);


  return category ? (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
        height: '100%',
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        p: 3,
      }}
    >
      {/* Category Image with Loading */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          overflow: "hidden",
          aspectRatio: "1",
        }}
      >
        <Image
          src={category.image}
          alt={category.name}
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius={2}
        />
      </Box>

      <CardContent>
        {/* Edit / Delete Buttons */}
        { (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton onClick={(e) => {e.stopPropagation(); makeDeleteCategorytRequest(category);}} color="error">
              <DeleteForeverOutlined />
            </IconButton>
            <IconButton onClick={(e)=> { e.stopPropagation(); setIsModalOpen(true);} } color="primary">
              <EditIcon />
            </IconButton>
          </Box>
        )}

        {/* Category Name Display */}
        {(
          <Box
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              p: 1,
              backgroundColor: "#fff",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
              },
              textAlign: "center",
            }}
          >
            <ProductName style={{ textDecoration: "underline" }}>
              Name
            </ProductName>
            <ProductName style={{ paddingLeft: 10 }}>
              {category.name}
            </ProductName>
          </Box>
        )}
      </CardContent>

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth={true}
      >
        <DialogContent>
          <CreateCategoryForm
            showCreateCategory={false}
            category={category}
            formikCategory={formikCategory}
            buttonsActive={buttonsActive}
          />
        </DialogContent>
      </Dialog>

    </Card>
  ) : null;
};
