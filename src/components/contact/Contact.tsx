"use client";
import Heading from "../ui/Headings/H2/Heading";
import Section from "../ui/Section/Section";
import { useForm } from "react-hook-form";
import ContactImageSrc from "@/assets/casino.webp";
import { Loader2 } from "lucide-react";
import {
  AlertContainer,
  AlertDescription,
  ErrorMessage,
  ContactImage,
  FileInput,
  FileInputWrapper,
  FormContainer,
  Input,
  InputWrapper,
  Label,
  SubmitButton,
  TextArea,
} from "./Contact.styled";
import { useContactForm } from "@/hooks/contact/useContactForm";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
  file?: FileList;
}

function Alert({ children }: { children: React.ReactNode }) {
  return <AlertContainer>{children}</AlertContainer>;
}

export default function ContactSection() {
  const { isSubmitting, showSuccess, handleFormSubmit } = useContactForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  return (
    <Section id="contact" className="relative">
      <Heading title="Get in touch" />
      <FormContainer
        onSubmit={handleSubmit((data) => handleFormSubmit(data, reset))}
      >
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email is invalid",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </InputWrapper>
        <FileInputWrapper>
          <Label htmlFor="file">PDF File</Label>
          <FileInput
            id="file"
            type="file"
            accept=".pdf"
            {...register("file")}
          />
        </FileInputWrapper>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              Sending...
            </>
          ) : (
            "Send a message"
          )}
        </SubmitButton>
      </FormContainer>
      {showSuccess && (
        <Alert>
          <AlertDescription>Message sent succesfully</AlertDescription>
        </Alert>
      )}
      <ContactImage
        src={ContactImageSrc}
        width={520}
        height={360}
        loading="lazy"
        alt="Contact image"
      />
    </Section>
  );
}
