// priority: -1
StartupEvents.postInit(event => {
  if (debugMode) {
    runDebugProcess()
  }
})