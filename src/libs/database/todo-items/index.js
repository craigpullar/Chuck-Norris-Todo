import add from "./add";
import getAll from "./get-all";

export default ({ database }) => ({
  add: add({ database }),
  getAll: getAll({ database })
});
