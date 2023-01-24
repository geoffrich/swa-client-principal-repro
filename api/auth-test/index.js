module.exports = async function (context, req) {
  const msHeaders = Object.entries(req.headers).filter(([name, value]) =>
    name.startsWith("x-ms-client-principal")
  );
  context.res = {
    body: Object.fromEntries(msHeaders)
  };
};
