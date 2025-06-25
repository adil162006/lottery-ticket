import TicketNumber from './TicketNumber'
import './Ticket.css'

function Ticket({ticket}){
    return(
        <div className='Ticket'>
            {
                ticket.map((item,idx)=>{
                    return <TicketNumber num={item} key={idx}></TicketNumber>
                })
            }
        </div>
    )
}
export default Ticket