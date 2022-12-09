import classNames from "classnames/bind";
import React, { useState, useCallback, useContext, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";
import Heading from "@components/Heading";
import Button from "@components/Button";
import ActiveLinkContext from "src/store/link-context";

import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const observer = useRef<any>();
  const activeLinkCtx = useContext(ActiveLinkContext);

  const callbackFunction = (entries: any) => {
    if (entries[0].isIntersecting) {
      activeLinkCtx.updateActiveLink("contact");
    }
  };

  const options = {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
  };

  const contactRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction, options);
      if (node) observer.current.observe(node);
    },
    [activeLinkCtx.activeLink]
  );

  const handleSubmit = async (e: any) => {
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
    <section ref={contactRef} className={styles.section}>
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
              <AiOutlineMail className={styles.icon} />
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
