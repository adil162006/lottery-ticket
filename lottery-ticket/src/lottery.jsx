import { useState } from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket]=useState(genTicket(n))
    let isWinning = sum(ticket)===winningSum

    let newTicket = ()=>{
        setTicket(genTicket(n))
    }

    return(
        <div>
            <h1>
                lottery game
            </h1>
            <div className="ticket">
                <Ticket ticket={ticket} />

                <h3>{isWinning && "you won"}</h3>
                    <button onClick={newTicket}>Buy new ticket</button>
                
            </div>
        </div>
    )
}
export default Lottery;