// priority: -1

// Note: this is a startup script
StartupEvents.postInit(_event => {
  if (DebugMode.createModpackConfigs) {
    createModpackConfigs()
  }
})