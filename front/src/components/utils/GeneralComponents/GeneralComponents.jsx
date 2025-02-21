import styled from "styled-components";
import { slideInFromRight } from "../Animations/animations";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-primary);
  padding: var(--spacing-md);
  background-color: var(--primary-color-light-9);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-medium);
`;

export const Title = styled.h2`
  margin-bottom: var(--spacing-md);
  color: var(--primary-color-dark-4);
  font-size: var(--font-size-h4);
  text-align: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: var(--border-radius-large);
  overflow: hidden;
  position: relative;
`;

export const FormContent = styled.div`
  padding: var(--spacing-lg);
  animation: ${slideInFromRight} var(--transition-quick);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid var(--primary-color-dark-2);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-xs);
  background-color: var(--primary-color-light-8);
`;

export const InputBlock = styled.div`
 margin-bottom: var(--spacing-md);
`;

export const InputIcon = styled.div`
  margin: 0 var(--spacing-xs);
  color: var(--primary-color-dark-3);
`;

export const InputField = styled.input`
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