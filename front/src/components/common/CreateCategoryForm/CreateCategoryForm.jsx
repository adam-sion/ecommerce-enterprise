import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CategoryCard } from "../CreateCategoryCard/CategoryCard";
import { FormContent, InputBlock, InputField, InputIcon, InputWrapper } from "../../utils/GeneralComponents/GeneralComponents";
import { MdCategory } from "react-icons/md";
import { RiCheckFill, RiErrorWarningLine, RiUploadCloudLine } from "react-icons/ri";
import CustomButton from "../../utils/Button/Button";
import { useEffect } from "react";
import { BsFillImageFill } from "react-icons/bs";
import Modal from "../../utils/Modal/Modal";
import { ErrorMessage, MessageBox } from "../AdminForm/AdminForm";
import { Grid } from "@mui/material";

export const CreateCategoryForm = ({ showCreateCategory, formikCategory, category, setCategory, buttonsActive }) => {
  const { createCategoryLoading } = useSelector((state) => state.category);
  return (
    <>
      {showCreateCategory && category && (
        <div style={{ color: "green", textAlign: "center", fontSize: "16px" }}>
          <Modal>
            <Modal.Trigger opens="category-preview">
              <MessageBox>Category created successfully!</MessageBox>
            </Modal.Trigger>
            <Modal.Content name="category-preview">
              <CategoryCard originalCategory={category} />
            </Modal.Content>
          </Modal>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          formikCategory.handleSubmit(e.target);
        }}
      >
        <FormContent key="category">
          <Grid container spacing={3}>
            {/* Name Field */}
            <Grid item xs={12} md={6}>
              <InputBlock>
                <InputWrapper>
                  <InputIcon>
                    <MdCategory />
                  </InputIcon>
                  <InputField
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={formikCategory.handleChange}
                    onBlur={formikCategory.handleBlur}
                    value={formikCategory.values.name}
                  />
                  {formikCategory.errors.name && formikCategory.touched.name && (
                    <RiErrorWarningLine fontSize={"22px"} color="red" />
                  )}
                </InputWrapper>
                <ErrorMessage touched={formikCategory.touched.name} error={formikCategory.errors.name} />
              </InputBlock>
            </Grid>

            {/* Image Field */}
            <Grid item xs={12} md={6}>
              <InputBlock>
                <InputWrapper>
                  <InputIcon>
                    <BsFillImageFill /> {/* Default upload icon */}
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
                    }}
                    onBlur={formikCategory.handleBlur}
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
                    {formikCategory.values.image ? (
                      <>
               {(formikCategory.values.image instanceof File) ? formikCategory.values.image.name :`${formikCategory.values.name}.jpg`}                        <RiCheckFill fontSize="22px" color="green" />
                      </>
                    ) : (
                      <>
                        <RiUploadCloudLine color="gray" />
                        Upload Image
                      </>
                    )}
                  </label>
                </InputWrapper>
                <ErrorMessage touched={formikCategory.touched.image} error={formikCategory.errors.image} />
              </InputBlock>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} md={12}>
              <CustomButton
                type="submit"
                size="small"
                color="var(--primary-color-dark-2)"
                $invert={true}
                active={buttonsActive}
              >
                Create
              </CustomButton>
              <span>
                {createCategoryLoading ? (
                  <CircularProgress sx={{ marginLeft: "15px" }} size={"20px"} color="inherit" />
                ) : null}
              </span>
            </Grid>
          </Grid>
        </FormContent>
      </form>
    </>
  );
};
