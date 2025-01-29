import styled from "styled-components";
import { useState } from "react";
import CustomButton from "../../utils/Button/Button";
import { slideInFromRight } from "../../utils/Animations/animations";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa"; // Icons for fields
import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import Row from "../../utils/Row/Row";
import { TabButton, Tabs } from "../ShoppingCartWishlist/styles";
import { Box } from "@mui/material";

const ErrorMessage = ({touched, error}) => {
  return (touched &&
    <Box
      sx={{
        color: 'red',
        fontSize: '0.875rem',
        marginTop: '0.25rem',
        paddingLeft: 'var(--spacing-xs)', // You can pass this as a prop if needed
      }}
    >
      {error}
    </Box>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-primary);
  padding: var(--spacing-md);
  background-color: var(--primary-color-light-9);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-medium);
`;

const Title = styled.h2`
  margin-bottom: var(--spacing-md);
  color: var(--primary-color-dark-4);
  font-size: var(--font-size-h4);
  text-align: center;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: var(--border-radius-large);
  overflow: hidden;
  position: relative;
`;

const FormContent = styled.div`
  padding: var(--spacing-lg);
  animation: ${slideInFromRight} var(--transition-quick);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid var(--primary-color-dark-2);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-xs);
  background-color: var(--primary-color-light-8);
`;

const InputBlock = styled.div`
 margin-bottom: var(--spacing-md);
`;

const InputIcon = styled.div`
  margin: 0 var(--spacing-xs);
  color: var(--primary-color-dark-3);
`;

const InputField = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
  border: none;
  background: transparent;
  font-size: var(--font-size-body);
  color: var(--text-color);

  &:focus {
    outline: none;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
`;

const RememberMeCheckbox = styled.input`
  margin-right: var(--spacing-xs);
  accent-color: var(--primary-color-dark-2);
`;

const Link = styled.a`
  display: block;
  text-align: center;
  margin-top: var(--spacing-md);
  color: var(--primary-color-dark-5);
  cursor: pointer;
  font-size: var(--font-size-small);
  text-decoration: underline;
  transition: color var(--transition-quick);

  &:hover {
    color: var(--primary-color);
  }
`;
const SocialBtnContainer = styled(Row)`
  margin-top: 2rem;
`;

const SocialButton = styled(CustomButton)`
  min-width: 15rem;
`;
// const ErrorMessage = styled.p`
//   color: var(--danger-color);
//   font-size: var(--font-size-small);
//   text-align: center;
// `;


const loginValidationSchema = Yup.object({
  username: Yup.string().required("Username or Email is required"),
  password: Yup.string().required("Password is required"),
});

const registerValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});


 const handleGoogleLogin = (e) => {
  e.preventDefault();
  window.location.href = `${import.meta.env.VITE_JTV_SERVER_URL}/oauth2/authorization/google`;
};

 const handleFacebookLogin = (e) => {
  e.preventDefault();
  window.location.href = `${import.meta.env.VITE_JTV_SERVER_URL}/oauth2/authorization/facebook`;
};

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] = useState(false);

  const formikLogin = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log("Login form submitted", values);
    },
  });

  const formikRegister = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log("Register form submitted", values);
    },
  });

  return (
    <Container>
      <Title>{activeTab === "login" ? "Login" : "Register"}</Title>
      <FormWrapper>
        <Tabs>
          <TabButton
            $active={activeTab === "login"}
            onClick={() => {
              setShowRegisterConfirmPassword(false);
              setShowRegisterPassword(false);
              formikRegister.resetForm();
              setActiveTab("login")
            }}
          >
            Login
          </TabButton>
          <TabButton
            $active={activeTab === "register"}
            onClick={() =>{
              setShowLoginPassword(false);
              formikLogin.resetForm();
              setActiveTab("register")
            }}
          >
            Register
          </TabButton>
        </Tabs>
        {activeTab === "login" && (
          <form onSubmit={formikLogin.handleSubmit}>
          <FormContent key="login">
          <InputBlock>
            <InputWrapper>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <InputField type="text"
                  name="username"
                  placeholder="Username or Email"
                  onChange={formikLogin.handleChange}
                  onBlur={formikLogin.handleBlur}
                  value={formikLogin.values.username}/>
                  {formikLogin.errors.username && formikLogin.touched.username && <RiErrorWarningLine fontSize={'22px'} color="red"/>}
            </InputWrapper>
            <ErrorMessage touched={formikLogin.touched.username} error={formikLogin.errors.username}/>
            </InputBlock>
            <InputBlock>
            <InputWrapper>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <InputField 
              type={showLoginPassword ? "text":"password"}
                  name="password"
                  placeholder="Password"
                  onChange={formikLogin.handleChange}
                  onBlur={formikLogin.handleBlur}
                  value={formikLogin.values.password} />
                  {(formikLogin.errors.password && formikLogin.touched.password) ? 
                  <RiErrorWarningLine fontSize={'22px'} color="red"/> :
                  showLoginPassword ? <MdOutlineVisibilityOff fontSize={'22px'} onClick={()=> setShowLoginPassword(!showLoginPassword)}/>:
                  <MdOutlineVisibility fontSize={'22px'} onClick={()=> setShowLoginPassword(!showLoginPassword)}/>}
            </InputWrapper>  
           <ErrorMessage  touched={formikLogin.touched.password} error={formikLogin.errors.password}/>
            </InputBlock>
           

            <RememberMeContainer>
              <RememberMeCheckbox type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </RememberMeContainer>
            <CustomButton
            type="submit"
              size="small"
              color="var(--primary-color-dark-2)"
              $invert={true}
            >
              Login
            </CustomButton>
            <Link>Forgot your password?</Link>
            <SocialIcon />
          </FormContent>
          </form>
        )}
        {activeTab === "register" && (
          <form onSubmit={formikRegister.handleSubmit}>
          <FormContent key="register">
          <InputBlock>
            <InputWrapper>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <InputField type="text"
              placeholder="Username"
              name="username"
              onChange={formikRegister.handleChange}
              onBlur={formikRegister.handleBlur}
              value={formikRegister.values.username} />
             {formikRegister.errors.username && formikRegister.touched.username && <RiErrorWarningLine fontSize={'22px'} color="red"/>}
            </InputWrapper>
            <ErrorMessage  touched={formikRegister.touched.username} error={formikRegister.errors.username}/>
          </InputBlock>
          <InputBlock>
            <InputWrapper>
              <InputIcon>
                <FaEnvelope />
              </InputIcon>
              <InputField type="text"
              placeholder="Email"
              name="email"
              onChange={formikRegister.handleChange}
              onBlur={formikRegister.handleBlur}
              value={formikRegister.values.email} />
               {formikRegister.errors.email && formikRegister.touched.email && <RiErrorWarningLine fontSize={'22px'} color="red"/>}
            </InputWrapper>
            <ErrorMessage  touched={formikRegister.touched.email} error={formikRegister.errors.email}/>
            </InputBlock>
            <InputBlock>
            <InputWrapper>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <InputField type={showRegisterPassword ? "text": "password"}
              placeholder="Password"
              name="password"
              onChange={formikRegister.handleChange}
              onBlur={formikRegister.handleBlur}
              value={formikRegister.values.password} />
                {(formikRegister.errors.password && formikRegister.touched.password) ? 
                  <RiErrorWarningLine fontSize={'22px'} color="red"/> :
                  showRegisterPassword ? <MdOutlineVisibilityOff fontSize={'22px'} onClick={()=> setShowRegisterPassword(!setShowRegisterPassword)}/>:
                  <MdOutlineVisibility fontSize={'22px'} onClick={()=> setShowRegisterPassword(!showRegisterPassword)}/>}
            </InputWrapper>
            <ErrorMessage  touched={formikRegister.touched.password} error={formikRegister.errors.password}/>
            </InputBlock>
            <InputBlock>
            <InputWrapper>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <InputField type={showRegisterConfirmPassword ? "text": "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={formikRegister.handleChange}
              onBlur={formikRegister.handleBlur}
              value={formikRegister.values.confirmPassword} />
               {(formikRegister.errors.password && formikRegister.errors.password.length > 1 && formikRegister.touched.password) ? 
                  <RiErrorWarningLine fontSize={'22px'} color="red"/> :
                  showRegisterConfirmPassword ? <MdOutlineVisibilityOff fontSize={'22px'} onClick={()=> setShowRegisterConfirmPassword(!setShowRegisterConfirmPassword)}/>:
                  <MdOutlineVisibility fontSize={'22px'} onClick={()=> setShowRegisterConfirmPassword(!showRegisterConfirmPassword)}/>}
            </InputWrapper>
            <ErrorMessage  touched={formikRegister.touched.confirmPassword} error={formikRegister.errors.confirmPassword}/>
            </InputBlock>
            <CustomButton
            type="submit"
              size="small"
              color="var(--primary-color-dark-2)"
              $invert={true}
            >
              Register
            </CustomButton>
            
            <SocialIcon />
          </FormContent>
          </form>
        )}
      </FormWrapper>
    </Container>
  );
};

export default LoginRegister;

const SocialIcon = () => {
  return (
    <SocialBtnContainer
      type="vertical"
      $justifyContent="center"
      $flexGap=".8rem"
    >
      <SocialButton
       onClick={handleGoogleLogin}
        size="mini"
        color="var(--primary-color-dark-2)"
        $invert={true}
      >
        <Row
          type="horizontal"
          $justifyContent="space-between"
          $alignItems="center"
          $flexGap=".5rem"
        >
          <FaGoogle />
          Login with Google
        </Row>
      </SocialButton>
      <SocialButton
      // onClick={handleFacebookLogin}
        size="mini"
        color="var(--primary-color-dark-2)"
        $invert={true}
      >
        <Row
          type="horizontal"
          $justifyContent="space-between"
          $alignItems="center"
          $flexGap=".5rem"
        >
          <FaFacebook />
          Login with Facebook
        </Row>
      </SocialButton>
    </SocialBtnContainer>
  );
};
