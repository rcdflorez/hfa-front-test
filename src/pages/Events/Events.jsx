import { useEffect, useState } from "react"
import CardEvent from "../../components/CardsEvent/CardEvent"
import './Events.scss'

const Events = () => {

  const [events, setEvents] = useState(false)

  const orderByDates = (a,b)=>{
    const dateA = new Date(a.custom_fields.event_date[0]);
    const dateB = new Date(b.custom_fields.event_date[0]);
    const difA = Math.abs(dateA - new Date());
    const difB = Math.abs(dateB - new Date());
    return difA - difB;
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
    const env = import.meta.env
    fetch(
      `${env.VITE_CMS_BASE_URL}${env.VITE_CMS_API_URL}events`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const jsonByDates = json.sort(orderByDates);
        setEvents(jsonByDates)
      });
  }, [])

  return (
    <section className="events-page">
      {events && 
        events.map((data, index) =>
          <CardEvent 
            key={data.id}
            event={data}
            className={`${index % 2 !== 0 ? "white" : "gray"}`}
          />
        )
      }
    </section>
  )
}

export default Events