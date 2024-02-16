/* eslint-disable react/prop-types */
import "./CardEvent.scss";
const CardEvent = ({ event, className }) => {
  const event_date = new Date(event.custom_fields.event_date[0]);
  const monthDate = event_date.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonthName = monthNames[monthDate].toUpperCase().slice(0, 3);
  const day = event_date.getDate();
  const year = event_date.getFullYear();

  return (
    <div className={"container-events " + className}>
      <article className="card-event">
        <aside className="card-event_date">
          <div className="month">
            <p>{currentMonthName}</p>
          </div>
          <div className="day">
            <p>{day}</p>
          </div>
          <div className="year">
            <p>{year}</p>
          </div>
        </aside>

        <aside className="card-event_image">
          {console.log(event.custom_fields.event_image)}
          {event.custom_fields.event_image ? (
            <img
              src={event.custom_fields.event_image.replace(
                "http://",
                "https://"
              )}
              alt="event image"
            />
          ) : (
            <>
              {event.custom_fields.event_video[0].includes("youtube") ? (
                <iframe
                  src={event.custom_fields.event_video[0].replace(
                    "watch?v=",
                    "embed/"
                  )}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={event.custom_fields.event_video[0]}
                  controls
                  // width="471"
                  // height="290"
                  poster={event.custom_fields.event_video_poster[0]}
                ></video>
              )}
            </>
          )}
        </aside>

        <aside className="card-event_data">
          <div className="data-header">
            <>
              {event.custom_fields.event_url ? (
                <p className="data-header_title">
                  <a href={event.custom_fields.event_url}>
                    {" "}
                    {event.title.rendered}{" "}
                  </a>
                </p>
              ) : (
                <p className="data-header_title">{event.title.rendered}</p>
              )}
            </>

            <p
              className="data-header_subtitle"
              dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }}
            ></p>
          </div>
          <div className="data-content">
            <p>{event.custom_fields.event_description}</p>
          </div>
        </aside>
      </article>
    </div>
  );
};

export default CardEvent;
