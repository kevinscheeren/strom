import "colorts/lib/string";

const tag: String = "CGit:".magenta;

export const info = (message: String): void => {
  console.log("INFO".bgWhite.black, tag, message);
};

export const warn = (message: String): void => {
  console.log("WARN".bgYellow.black, tag, message);
};

export const error = (message: String): void => {
  console.log("ERROR".bgRed.black, tag, message);
};
