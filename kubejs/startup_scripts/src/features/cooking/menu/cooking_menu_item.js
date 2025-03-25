const CookingMenuItem = {
  get nonStackableIds () {
    return this._menuIds
  },
  get _menuIds () {
    let menuIds = []
    let menusConst = CookingMenuConst.menus
    for (let menuSize in menusConst) {
      menuIds.push(
        menusConst[menuSize].id
      )
    }
    return menuIds
  }
}