import { useState } from "react";
//Controlled components are one where input is captured using change events
export default function Input1() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0);
  const captureUserName = (e) => setUserName(e.target.value);
  const captureAge = (e) => setAge(e.target.value);
  return (
    <div>
      <label>
        Enter user name <input onChange={captureUserName} />
      </label>
      <br />
      <label>
        Enter age <input onChange={captureAge} />
      </label>
      <h1>
        You entered username {userName} and age {age}
      </h1>
    </div>
  );
}
