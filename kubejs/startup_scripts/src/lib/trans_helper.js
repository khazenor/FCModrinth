const TransHelper = {
  defaultTransKey: (itemId, idx) => {
    return `item.${itemId.replace(':', '.')}.tooltip${idx}`
  }
}