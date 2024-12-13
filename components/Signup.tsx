"use client"

import axios from "axios"
import { useState } from "react"
import {signup} from "@/app/actions/user"

export const Signup = ()=>{
    const [username, setUsername]= useState("");
    const [password, setPassword] = useState("");
    
    return <div>
        <div>
            <input onChange={(e)=>{
                setUsername(e.target.value)
            }} type="text" placeholder="username" />
        </div>
        <div>
            <input onChange={(e)=>{
                setPassword(e.target.value)
            }} type="text" placeholder="password" />
        </div>
        <button onClick={ async ()=>{
            const res = await signup(username, password);
            console.log(res)
            
        }}>Signup</button>
    </div>
}