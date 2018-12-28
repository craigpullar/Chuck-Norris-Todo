import add from "./add";
import getAll from "./get-all";
import remove from "./remove";

export default ({ database }) => ({
  add: add({ database }),
  getAll: getAll({ database }),
  remove: remove({ database })
});
