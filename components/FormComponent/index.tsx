/* eslint-disable @typescript-eslint/no-explicit-any */
// libs
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
// apis
import { createProduct } from "../../apis/createProduct";
import { updateProduct } from "@/apis/updateProduct";
// others
import styles from "../../styles/FormComponent.module.scss";

interface FormValues {
  product_name: string;
  description: string;
  price: number;
  image_url: string;
}

interface PROPS {
  type: "edit" | "create";
  initialValues?: {
    product_name: string;
    description: string;
    price: number;
    image_url: string;
  };
  id?: string | string[];
}

const FormComponent = ({ type, initialValues, id }: PROPS) => {
  const SignUpSchema = Yup.object().shape({
    product_name: Yup.string().required("Required"),

    description: Yup.string(),

    price: Yup.number().required("Required"),

    image_url: Yup.string().required("Required"),
  });

  const router = useRouter();

  const createSuccess = (res: any) => {
    if (res?.success) {
      alert("Create Success");
      router.push("/");
    }
  };

  const editSuccess = (res: any) => {
    if (res?.success) {
      alert("Edit Success");
      router.push("/");
    }
  };

  const handleSubmit = (values: FormValues) => {
    const data = {
      product_name: values?.product_name,
      description: values?.description,
      price: values?.price,
      image_url: values?.image_url,
    };
    if (type === "create") {
      createProduct({
        data,
        handleSuccess: (res: any) => createSuccess(res),
      });
    } else {
      updateProduct({
        id_product: id,
        data,
        handleSuccess: (res: any) => editSuccess(res),
      });
    }
  };

  const title = type === "create" ? "Create Product" : "Edit Product";

  return (
    <div className={styles.formikFeedback}>
      <h2>{title}</h2>
      <Formik
        initialValues={{
          product_name: initialValues?.product_name || "",
          description: initialValues?.description || "",
          price: initialValues?.price || 0,
          image_url:
            initialValues?.image_url || "https://picsum.photos/200/300",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values: FormValues) => {
          handleSubmit(values);
        }}
      >
        <Form>
          <label htmlFor="product_name" className={styles.label}>
            <span style={{ color: "red" }}>*</span> Product Name
          </label>
          <Field name="product_name" placeholder="Type your answer here" />
          <ErrorMessage name="product_name" component="span" />

          <label htmlFor="description" className={styles.label}>
            <span style={{ color: "red" }}>*</span> Description
          </label>
          <Field name="description" placeholder="Type your answer here" />
          <ErrorMessage name="description" component="span" />

          <label htmlFor="price" className={styles.label}>
            <span style={{ color: "red" }}>*</span> Price
          </label>
          <Field name="price" placeholder="Type your answer here" />
          <ErrorMessage name="price" component="span" />

          <label htmlFor="image_url" className={styles.label}>
            Image
          </label>
          <Field name="image_url" placeholder="Type your answer here" />
          <ErrorMessage name="image_url" component="span" />

          <button type="submit" className={styles.btnSuccess}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
