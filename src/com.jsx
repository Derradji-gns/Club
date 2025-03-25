import Cer from "./cer";

function Community() {
    return(
        <div className="w-full h-150 bg-gray-900 mb-4">
            <div className="w-full h-10">
                <h2 className="text-center text-2xl text-white font-bold">Join The Community</h2>
                <p className="text-center text-white mt-3">Discover what our commuinty has to say about their IGenergy Experience</p>
            </div>
            <div className="flex flex-nowrap w-full h-auto overflow-x-auto overflow-y-hidden pb-6 mt-20 scrollbar-hide">
                <div className="flex gap-3 space-x-4 px-4 mt-5">
                    <Cer className="shadow-6xl shadow-white" src='/public/graphics/walid.jpg' name="Benouali Omar Walid" caption="IGENERGY n'est pas seulement un club, c'est une famille où chacun trouve sa place et grandit ensemble ! ❤️🙂"/>
                    <Cer src='/public/graphics/anis.jpg' name="Bendriss Anis" caption="At IGEnergy, work is driven by passion, innovation, and collaboration. Every effort contributes to a shared vision of excellence and progress. ✨️ "/>
                    <Cer src='/public/graphics/meriem.jpg' name="Bouarroudj Meriem" caption="At IGEnergy, success is built on unity and collaboration. Differences in opinions and perspectives are natural, but progress comes when we set aside conflicts, focus on our shared goals, and work together with respect and determination.🤙"/>
                    <Cer src='/public/graphics/sun.jpg' name="Hadjij Chourouk" caption="نحن دائما نسعى لتقديم أفضل ما نملك من أجل إحياء روح الفريق و المضي قُدمًا نحو فرص جديدة . هذه عائلتنا ❤️"/>
                    <Cer src='/public/graphics/me.jpg' name="Derradji Amine Abdelbasset ⚜️" caption="For me IGENERGY was a great opportunity to show my abilities and practise all what I learn before . "/>
                    
                </div>
            </div>
        </div>
    )
};

export default Community;
