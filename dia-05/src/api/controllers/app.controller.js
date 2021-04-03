
const status = (request, h) => {
    return {
      now: Date.now(),
      message: "This is Brazil!!",
    };
  }


module.exports = {
    status
}