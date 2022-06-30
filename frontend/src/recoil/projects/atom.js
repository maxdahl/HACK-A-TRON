import { atom } from "recoil";
import axios from "axios";

const projectsAtom = atom({
  key: "projectsAtom",
  default: [],
  effects: [
    ({ setSelf }) => {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:8000/api/v1/projects");
        setSelf(res.data.data);
      };

      fetchData();
    },
  ],
});

export default projectsAtom;
