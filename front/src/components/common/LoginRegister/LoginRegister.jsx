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
import Row from "../../utils/Row/Row";
import { TabButton, Tabs } from "../ShoppingCartWishlist/styles";

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
  margin-bottom: var(--spacing-md);
  border: 2px solid var(--primary-color-dark-2);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-xs);
  background-color: var(--primary-color-light-8);
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

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Container>
      <Title>{activeTab === "login" ? "Login" : "Register"}</Title>
      <FormWrapper>
        <Tabs>
          <TabButton
            $active={activeTab === "login"}
            onClick={() => setActiveTab("login")}
          >
            Login
          </TabButton>
          <TabButton
            $active={activeTab === "register"}
            onClick={() => setActiveTab("register")}
          >
            Register
          </TabButton>
        </Tabs>
        {activeTab === "login" && (
          <FormContent key="login">
            <InputWrapper>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <InputField type="text" placeholder="Username or Email" />
            </InputWrapper>
            <InputWrapper>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <InputField type="password" placeholder="Password" />
            </InputWrapper>
            <RememberMeContainer>
              <RememberMeCheckbox type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </RememberMeContainer>
            <CustomButton
              size="small"
              color="var(--primary-color-dark-2)"
              $invert={true}
            >
              Login
            </CustomButton>
            <Link>Forgot your password?</Link>
            <SocialIcon />
            {/* <ErrorMessage></ErrorMessage> */}
          </FormContent>
        )}
        {activeTab === "register" && (
          <FormContent key="register">
            <InputWrapper>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <InputField type="text" placeholder="Username" />
            </InputWrapper>
            <InputWrapper>
              <InputIcon>
                <FaEnvelope />
              </InputIcon>
              <InputField type="email" placeholder="Email" />
            </InputWrapper>
            <InputWrapper>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <InputField type="password" placeholder="Password" />
            </InputWrapper>
            <InputWrapper>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <InputField type="password" placeholder="Confirm Password" />
            </InputWrapper>
            <CustomButton
              size="small"
              color="var(--primary-color-dark-2)"
              $invert={true}
            >
              Register
            </CustomButton>
            <SocialIcon />
            {/* <ErrorMessage></ErrorMessage> */}
          </FormContent>
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
