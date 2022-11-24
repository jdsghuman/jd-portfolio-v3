import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "@components/Heading";
import styles from "./Contact.module.scss";
import Button from "@components/Button";

const cx = classNames.bind(styles);

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("/api/send-mail", {
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        message: form.message,
      })
      .then(function (response) {
        if (response.status !== 201) {
          toast.error("Error. Message not sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
          console.log("failed", response.status);
        }
        setForm(initialState);
        toast.success("Message sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
        });
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Error. Message not sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      });
  };

  return (
    <section className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="contact"
          style={{ position: "absolute", top: "-50px", left: 0 }}
        ></div>
      </div>
      <Heading title="contact" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <div className={styles.container}>
            <div className={cx("name", "name__top")}>
              <label>
                First name *
                <input
                  type="text"
                  name="firstName"
                  required
                  className={styles.input}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  value={form.firstName}
                />
              </label>
            </div>
            <div className={styles.name}>
              <label>
                Last name *
                <input
                  type="text"
                  name="lastName"
                  required
                  className={styles.input}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  value={form.lastName}
                />
              </label>
            </div>
          </div>
          <div>
            <div className={styles.margin__bottom}>
              <label>
                Email *
                <input
                  type="email"
                  name="email"
                  required
                  className={styles.input}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  value={form.email}
                />
              </label>
            </div>
            <div className={styles.margin__bottom}>
              <label>
                Message *
                <textarea
                  name="message"
                  className={cx("input", "input__message")}
                  required
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  value={form.message}
                />
              </label>
            </div>
            <Button type="submit" primary>
              Send Email
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
