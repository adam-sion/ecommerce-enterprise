import { useNavigate, useRouteError } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../../components/utils/Button/Button";

const NotFoundContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xxl);
  padding-top: 20vh;
  font-family: var(--font-primary);
  color: var(--text-color);
  background-color: var(--primary-color);
`;

const Title = styled.h1`
  font-family: var(--font-primary);
  font-size: 15em;
  font-weight: 100;
  text-shadow:
    1px 1px var(--primary-color-dark-1),
    2px 2px var(--primary-color-dark-1),
    3px 3px var(--primary-color-dark-1),
    /* Continue the shadow pattern as needed */ 26px 26px
      var(--primary-color-dark-5);
`;

const Message = styled.p`
  font-size: 2em;
  font-weight: 100;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-bottom: 15rem; /* Move margin here for better practice */
`;

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Message>Oops! Something is wrong.</Message>
      <Message>
        {error?.data || error?.message || "Unknown error occurred."}
      </Message>
      <ButtonContainer>
        <CustomButton active={true} color="var(--text-color)" onClick={() => navigate(-1)}>
          <i className="icon-home"></i> Go back
        </CustomButton>
      </ButtonContainer>
    </NotFoundContainer>
  );
};

export default NotFound;
