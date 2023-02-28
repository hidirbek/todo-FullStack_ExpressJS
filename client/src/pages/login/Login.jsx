import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function Login() {
  const register = (e) => {
    e.preventDefault();

    let { name, username, email, password } = e.target;
    let new_user = {
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value,
    };

    fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(new_user),
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg));
  };

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
          />

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" />
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
          />
          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
          />

          <MDBBtn
            onClick={(e) => {
              register(e);
            }}
            className="mb-4 w-100"
          >
            Sign up
          </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;
