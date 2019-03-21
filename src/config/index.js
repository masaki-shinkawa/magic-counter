const getConfig = () => {
  const default_config = require('./default.js')
  try {
    const env_config = require(`./${process.env.NODE_ENV}.js`)

    return { ...default_config.default, ...env_config.default }
  } catch (error) {
    console.error(error);
    return { ...default_config.default }
  }
}

export default getConfig()
