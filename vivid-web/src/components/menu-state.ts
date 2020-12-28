// FILEPATH: src/components/menu.tsx

import { action, decorate, observable } from 'mobx';
import { MenuProp } from "../components/menu"

class MenuState {
    menuProp: MenuProp;
    constructor(p: MenuProp){
        this.menuProp = p;
    }
}

decorate(MenuState, {
    menuProp: observable,
});

export default MenuState;
