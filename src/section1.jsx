import Card from "./card";

function Events() {
    return (
        <div className="bg-gray-900 w-full">
        <h1 className="text-white font-bold text-center text-2xl sm:text-2xl md:text-2xl">Overview About our Events</h1>
      <div className="grid lg:grid lg:grid-cols-2 lg:justify-items-center lg:justify-5 lg:content-center lg:gap-x-0 w-full h-auto  bg-gray-900 justify-center mt-10">
        <Card 
        
          src='/public/graphics/vite.svg'
          caption={"Great competition for programmers and IT students"}
          title={"Tech Hub"}
        />
                <Card
          src='/public/graphics/vite.svg'
          caption={"Event organized for features tech talks, workshops, and innovative projects"}
          title={"IT Day"}
        />
                        <Card
          src='/public/graphics/vite.svg'
          caption={"Space for communications and sharing electronic projects between members"}
          title={"Energy Space"}
        />
                        <Card
          src='public/graphics/vite.svg'
          caption={"An event to boosts public speaking skills through talks and interactive discussions"}
          title={"Speak Up"}
        />
            <Card 
        className="gap-x-0"
          src="./public/vite.svg"
          caption={"Workshops and an opportunity to develop club members and acquire new skills"}
          title={"Teach Me How ?"}
        />
            <Card 
        className="gap-x-0"
          src="/public/graphics/vite.svg"
          caption={"Teaching members programming languages and problem solving"}
          title={"Hour Of Code"}
        />
      </div></div>
    );
};

export default Events;