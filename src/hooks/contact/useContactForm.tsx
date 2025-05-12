import { useState } from "react";
import { UseFormReset } from "react-hook-form";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
  file?: FileList;
}

interface UseContactFormReturn {
  isSubmitting: boolean;
  showSuccess: boolean;
  handleFormSubmit: (data: IFormInputs, reset: UseFormReset<IFormInputs>) => Promise<void>;
}

export const useContactForm = (): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = async (data: IFormInputs, reset: UseFormReset<IFormInputs>) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      if (data.file && data.file[0]) {
        formData.append("file", data.file[0]);
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Błąd podczas wysyłania wiadomości");
      }

      setShowSuccess(true);
      reset();
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Błąd podczas wysyłania wiadomości");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    showSuccess,
    handleFormSubmit,
  };
};