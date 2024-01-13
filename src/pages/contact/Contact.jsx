import React from "react";
import "./contact.css";
import AnimatedPage from "../AnimatedPage";
import { RiMailCheckLine, RiMapPinLine } from "react-icons/ri";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import doneAnimation from "../../Animation/doneAnimation.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdoqojoy");

  return (
    <AnimatedPage>
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Me</h1>
          <h2>
            Don't be shy! Hit me up! <span>👇</span>
          </h2>
          <div className="address">
            <a href="mailto:tim@gmai.com">
              <RiMailCheckLine style={{ marginRight: "10px" }} />
              yassinmoutik20@gmial.com
            </a>
            <span>
              <RiMapPinLine style={{ marginRight: "10px" }} />
              Khouribga, Morocco
            </span>
          </div>
          <div className="contact-form">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="name">
                <label htmlFor="userName">Name</label>
                <br />
                <input type="text" autoComplete="off" name="userName" id="userName" />
                <ValidationError
                  prefix="UserName"
                  field="userName"
                  errors={state.errors}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  id="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="subject">
                <label htmlFor="message">Message ...</label>
                <br />
                <textarea name="message" id="message" cols="30" rows="2" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="submit-message">
                <span style={{ display: "flex", alignItems: "center" }}>
                  {state.succeeded && (
                    <>
                      <Lottie
                        loop={false}
                        style={{ height: 35 }}
                        animationData={doneAnimation}
                      />
                      Your submission has been received!
                    </>
                  )}
                </span>
                <div>
                  <button type="submit" disabled={state.submitting}>
                    {state.submitting ? "Submitting" : "Submit"}
                  </button>
                </div>
              </div>
            </form>
            <div className="contact-animation">
              <DotLottiePlayer
                className="animation"
                src={"/lotties/contactAnimation.lottie"}
                autoplay
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
