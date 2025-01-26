import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

// Styled Components
const CommentsSection = styled.section`
  position: relative;
  width: 100%;
  background: var(--background-color);
  padding: var(--spacing-xxl);
  @media (max-width: 580px) {
    padding: var(--spacing-lg);
  }
  @media only screen and (min-width: 1024px) {
    margin: 0 auto var(--spacing-xxxl);
  }
`;

const SectionContainer = styled.div`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: var(--font-secondary);
  position: relative;
  font-size: var(--font-size-h4);

  &::after {
    content: "";
    display: block;
    width: 4em;
    height: 0.25em;
    background: var(--secondary-color);
    margin-top: var(--spacing-sm);
  }
`;

const CommentList = styled.div`
  margin-top: var(--spacing-xl);
`;

const CommentItem = styled.div`
  display: flex;
  margin-bottom: var(--spacing-xl);
`;

const CommentAvatar = styled.div`
  flex: 0 0 3rem;
  height: 3rem;
  color: var(--light-grey-color);
  margin-right: var(--spacing-md);

  svg {
    width: 100%;
    height: 100%;
  }
`;

const CommentContent = styled.div`
  flex: 1;
  color: var(--text-color);
`;

const CommentAuthor = styled.div`
  font-weight: bold;
  margin-bottom: var(--spacing-xs);
`;

const CommentText = styled.p`
  font-size: var(--font-size-body);
  line-height: 1.5;
  margin: 0;
`;

const CommentsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--spacing-xxl);
  width: 100%;
  justify-content: center;

  .col-1 {
    flex: 0.5;
  }
  .col-2 {
    flex: 1.5;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const FormField = styled.div`
  position: relative;
  width: 100%;
  margin: var(--spacing-md) 0;
`;

const FormLabel = styled.label`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font: 700 var(--font-size-h6) var(--font-secondary);
  cursor: text;
  pointer-events: none;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.1875rem;
    background: var(--secondary-color);
    bottom: 1em;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-normal);
  }
`;

const FormLabelText = styled.span`
  display: block;
  transform: translateY(100%);
  opacity: 0;
  transition:
    transform var(--transition-normal),
    opacity var(--transition-normal);
  will-change: transform, opacity;
`;

const FormInput = styled.input`
  position: relative;
  width: 100%;
  padding: 1.2em 0;
  border: 0;
  outline: 0;
  margin: 1.2em 0;
  border-bottom: 0.1875rem solid var(--light-grey-color);
  background: transparent;
  vertical-align: bottom;
  font: 400 var(--font-size-body) var(--font-secondary);

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
  }

  &:focus + ${FormLabel} ${FormLabelText} {
    transform: translateY(0);
    opacity: 1;
  }

  &:focus + ${FormLabel}::after {
    transform: scaleX(1);
  }
`;

const FormTextarea = styled.textarea`
  position: relative;
  width: 100%;
  border: 0;
  outline: 0;
  margin: 3.45em 0;
  border-bottom: 0.1875rem solid var(--light-grey-color);
  background: transparent;
  vertical-align: bottom;
  min-height: 9.69rem;
`;

const SubmitButton = styled.input`
  align-self: flex-start;
  background-color: var(--secondary-color);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: var(--font-size-button);
  color: var(--text-color);
  border-radius: var(--border-radius-medium);
  transition: background-color var(--transition-quick);

  &:hover {
    background-color: var(--primary-color);
  }
`;

// Main Component
const ContactFormComment = () => {
  return (
    <CommentsSection>
      {/* Comments Section */}
      <SectionContainer>
        <SectionTitle>2 Comments</SectionTitle>

        <CommentList>
          <CommentItem>
            <CommentAvatar>
              <FaUserCircle />
            </CommentAvatar>
            <CommentContent>
              <CommentAuthor>2024-05-02 Emily Clark</CommentAuthor>
              <CommentText>
                These beauty tips are really helpful. My skin feels amazing!
              </CommentText>
            </CommentContent>
          </CommentItem>
          <CommentItem>
            <CommentAvatar>
              <FaUserCircle />
            </CommentAvatar>
            <CommentContent>
              <CommentAuthor>2024-05-02 Michael Smith</CommentAuthor>
              <CommentText>
                I appreciate the makeup hacks. Saving so much time in the
                morning now!
              </CommentText>
            </CommentContent>
          </CommentItem>
        </CommentList>
      </SectionContainer>

      {/* Leave a Comment Section */}
      <SectionContainer>
        <SectionTitle>Leave a Comment</SectionTitle>

        <CommentsForm>
          <FormWrapper>
            <div className="col-1">
              <FormField>
                <FormInput
                  id="comments__form-input-name"
                  name="author"
                  placeholder="Name"
                  type="text"
                />
                <FormLabel htmlFor="comments__form-input-name">
                  <FormLabelText>Name</FormLabelText>
                </FormLabel>
              </FormField>
              <FormField>
                <FormInput
                  id="comments__form-input-email"
                  name="author"
                  placeholder="E-mail"
                  type="text"
                />
                <FormLabel htmlFor="comments__form-input-email">
                  <FormLabelText>E-mail</FormLabelText>
                </FormLabel>
              </FormField>
            </div>
            <div className="col-2">
              <FormField>
                <FormTextarea
                  id="comments__form-textarea"
                  name="author"
                  placeholder="Express your thoughts"
                ></FormTextarea>
                <FormLabel htmlFor="comments__form-textarea">
                  <FormLabelText>Express your thoughts</FormLabelText>
                </FormLabel>
              </FormField>
            </div>
          </FormWrapper>

          <SubmitButton
            name="submit"
            type="submit"
            id="submit"
            value="Post Comment"
          />
        </CommentsForm>
      </SectionContainer>
    </CommentsSection>
  );
};

export default ContactFormComment;
