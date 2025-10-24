import Line1 from "@/components/Line1";
import Line2 from "@/components/Line2";
import Widget1 from "@/components/Widget1";
import Widget2 from "@/components/Widget2";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="bg-[linear-gradient(180deg,#373E44_-100%,#191B1F_100%)] relative h-[90vh] max-w-[1728px] max-h-[895px] md:w-[1728px] md:h-[895px] w-[90vw] rounded-[28px] shadow-[10px_10px_40px_10px_#00000080]">
        <Widget1/>
        <Line1 />
        <Widget2/>  
        <Line2 />
      </div>
    </div>
  );
}



