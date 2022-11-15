import Button from "react-bootstrap/Button";
import { React, useRef, useState, useEffect } from "react";
import { useHref } from "react-router";
import "./InfoForm.css";
import SelectInputDiv from "./SelectInputDiv";
import Status from "./Status";
import TextInputDiv from "./TextInputDiv";

const InfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [political, setPolitical] = useState();
  const [sexual, setSexual] = useState();
  const [count, setCount] = useState(0);

  return (
    <form className="Info-Form">
      <h1>Information Form</h1>
      <br />
      <Status count={count} />
      <TextInputDiv
        name={"Name"}
        updateVal={setName}
        val={name}
        count={count}
        setCount={setCount}
      />
      <SelectInputDiv
        name="Political belief"
        opt={["Right", "Left", "Center", "I choose not to disclose."]}
        updateVal={setPolitical}
        val={political}
        count={count}
        setCount={setCount}
      />
      <TextInputDiv
        name={"Email"}
        updateVal={setEmail}
        val={email}
        count={count}
        setCount={setCount}
      />
      <SelectInputDiv
        name="Your sexual preference"
        opt={[
          "Heterosexual",
          "Homosexual",
          "Asexual",
          "I choose not to disclose.",
        ]}
        updateVal={setSexual}
        val={sexual}
        count={count}
        setCount={setCount}
      />
      <br />
      <Button type="submit" size="lg" variant="outline-primary">
        Submit
      </Button>
    </form>
  );
};

export default InfoForm;
