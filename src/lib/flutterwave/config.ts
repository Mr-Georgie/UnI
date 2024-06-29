const Flutterwave = require("flutterwave-node-v3");
let flw = new Flutterwave(
  process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
  process.env.NEXT_PUBLIC_FLW_SECRET_KEY
);

export default flw;
