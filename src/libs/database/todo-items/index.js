import add from "./add";

export default ({ database }) => ({
  add: add({ database })
});
