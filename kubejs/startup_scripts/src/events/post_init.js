// priority: -1
StartupEvents.postInit(_event => {
  if (DebugMode.createModpackConfigs) {
    createModpackConfigs()
  }
})