import React, { useState } from "react";

// Create JSON Data | How to create specific json data format to send api
const structure = {
  status: "Active",
  hr: [
    {
      name: "",
      age: "",
      experience: "",
      salary: "",
      bonus: "",
      phone: "",
    },
  ],
  IT: [
    {
      name: "",
      age: "",
      experience: "",
      salary: "",
      bonus: "",
      phone: "",
    },
  ],
};

export default function JSONDATA() {
  const [value, setValue] = useState({});
  const [finalData, setFinalData] = useState([]);
  const [active, setActive] = useState("InActive");

  const activeAndInActive = () => {
    setActive("active");
  };

  const onChangeEvent = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const addRecordEvent = () => {
    const arr = [...finalData];
    arr.push(value);
    setFinalData(arr);
    // console.log(arr);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("valuee --> ", value, finalData);
    const structure = {
        status: active,
        hr: [],
        IT: []
    }
    // let hrObj= {};
    // let itObj= {};
    finalData.map((item) => {
        console.log("item.categoryItem.category", item.category);
        let hrObj= {};
        let itObj= {};
        if(item.category.toLowerCase() === "hr") {
            hrObj["name"] = item.name;
            hrObj["age"] = item.age;
            hrObj["experience"] = item.experience;
            hrObj["salary"] = item.salary;
            hrObj["phone"] = item.phone;
            hrObj["bonus"] = item.bonus;
            structure.hr.push(hrObj);
        } else if(item.category.toLowerCase() === "it") {
            itObj["name"] = item.name;
            itObj["age"] = item.age;
            itObj["experience"] = item.experience;
            itObj["salary"] = item.salary;
            itObj["phone"] = item.phone;
            itObj["bonus"] = item.bonus;
            structure.IT.push(itObj);
        } else {

        }
    })
    console.log("structure", structure);
  };

  return (
    <div>
      <h1>JSON Data</h1>
      <div style={{ display: "flex", width: "600px", margin: "50px auto" }}>
        <form
          style={{ border: "1px solid #000", padding: "20px" }}
          onSubmit={onSubmitHandler}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "300px" }}>
              <label>Status:</label>
              <select
                name="state"
                placeholder="Status"
                onChange={activeAndInActive}
              >
                <option value="InActive">InActive</option>
                <option value="active">Active</option>
              </select>
              <br /><br />
 
              {active === "active" ? (
                <>
                  <label>Category</label>
                  <select name="category" onChange={onChangeEvent}>
                    <option value="">Select</option>
                    <option value="hr">HR</option>
                    <option value="it">I.T</option>
                  </select>
                  <br /><br />

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    onChange={onChangeEvent}
                  />
                  <br /><br />
                  <input
                    type="text"
                    name="age"
                    placeholder="Enter Age"
                    onChange={onChangeEvent}
                  />
                  <br /><br />
                  <input
                    type="text"
                    name="salary"
                    placeholder="Enter Salary"
                    onChange={onChangeEvent}
                  />
                  <br /><br />
                  <input
                    type="text"
                    name="bonus"
                    placeholder="Enter Bonus"
                    onChange={onChangeEvent}
                  />
                  <br /><br />
                  <input
                    type="text"
                    name="experience"
                    placeholder="Enter Experience"
                    onChange={onChangeEvent}
                  />
                  <br /><br />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    onChange={onChangeEvent}
                  />
                  <br /><br />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <button className="btn btn-outline-primary" onClick={addRecordEvent}>Add Record</button>
          {" "}
          <button className="btn btn-outline-success" type="submit" >
            Submit
          </button>
        </form> 
        
      </div>
    </div>
  );
}
