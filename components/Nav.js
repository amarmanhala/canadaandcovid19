import TabButton from "./TabButton";
import { provinces } from "../provinces";
export default function Nav() {
 
  return (
    <>
      <div>
        {provinces.map((province) => {
          return <TabButton label={province.name}></TabButton>;
        })}
      </div>
    </>
  );
}
