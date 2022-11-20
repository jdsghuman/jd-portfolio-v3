import classNames from "classnames/bind";
import React, { useState } from "react";
import Heading from "@components/Heading";
import styles from "./Contact.module.scss";
import Button from "@components/Button";

const cx = classNames.bind(styles);

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  return (
    <section className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="contact"
          style={{ position: "absolute", top: "-50px", left: 0 }}
        ></div>
      </div>
      <Heading title="contact" />
      <form className={styles.form}>
        <div>
          <div className={styles.container}>
            <div className={styles.name}>
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
    </section>
  );
};

export default Contact;
