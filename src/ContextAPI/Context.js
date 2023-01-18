import { createContext, useState } from "react";

export const CompContext = createContext();

export const ContextProvider = (props) => {
    const [users, seUsers] = useState([
        {
            "id": 1,
            "name": "Mairaj",
            "age" : 22,
            "designation": "Mern Stack Developer",
            "phone": "777-5557-111"
        },
        {
            "id": 2,
            "name": "Arsalan",
            "age" : 21,
            "designation": "Graphics Designer",
            "phone": "777-2251-555"
        },
        {
            "id": 3,
            "name": "Sufian",
            "age" : 22,
            "designation": "Java Developer",
            "phone": "777-4447-888"
        }
    ]);
    return (
        <CompContext.Provider value={users}>
            {props.children}
        </CompContext.Provider>
    )
}

